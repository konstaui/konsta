import {
  argbFromHex,
  Hct,
  SchemeTonalSpot,
  hexFromArgb,
} from './material-color-utilities/index.js';

/* eslint-disable */
// prettier-ignore
function toRGBA(d) {
  const r = Math.round;
  const l = d.length;
	const rgba = {};
	if (d.slice(0, 3).toLowerCase() === 'rgb') {
		d = d.replace(' ', '').split(',');
		rgba[0] = parseInt(d[0].slice(d[3].toLowerCase() === 'a' ? 5 : 4), 10);
		rgba[1] = parseInt(d[1], 10);
		rgba[2] = parseInt(d[2], 10);
		rgba[3] = d[3] ? parseFloat(d[3]) : -1;
	} else {
		if (l < 6) d = parseInt(String(d[1]) + d[1] + d[2] + d[2] + d[3] + d[3] + (l > 4 ? String(d[4]) + d[4] : ''), 16);
		else d = parseInt(d.slice(1), 16);
		rgba[0] = (d >> 16) & 255;
		rgba[1] = (d >> 8) & 255;
		rgba[2] = d & 255;
		rgba[3] = l === 9 || l === 5 ? r((((d >> 24) & 255) / 255) * 10000) / 10000 : -1;
	}
	return rgba;
}

// prettier-ignore
function blend(from, to, p = 0.5) {
  const r = Math.round;
  from = from.trim();
	to = to.trim();
	const b = p < 0;
	p = b ? p * -1 : p;
	const f = toRGBA(from);
	const t = toRGBA(to);
	if (to[0] === 'r') {
		return 'rgb' + (to[3] === 'a' ? 'a(' : '(') +
			r(((t[0] - f[0]) * p) + f[0]) + ',' +
			r(((t[1] - f[1]) * p) + f[1]) + ',' +
			r(((t[2] - f[2]) * p) + f[2]) + (
				f[3] < 0 && t[3] < 0 ? '' : ',' + (
					f[3] > -1 && t[3] > -1
						? r((((t[3] - f[3]) * p) + f[3]) * 10000) / 10000
						: t[3] < 0 ? f[3] : t[3]
				)
			) + ')';
	}

	return '#' + (0x100000000 + ((
		f[3] > -1 && t[3] > -1
			? r((((t[3] - f[3]) * p) + f[3]) * 255)
			: t[3] > -1 ? r(t[3] * 255) : f[3] > -1 ? r(f[3] * 255) : 255
		) * 0x1000000) +
		(r(((t[0] - f[0]) * p) + f[0]) * 0x10000) +
		(r(((t[1] - f[1]) * p) + f[1]) * 0x100) +
		r(((t[2] - f[2]) * p) + f[2])
	).toString(16).slice(f[3] > -1 || t[3] > -1 ? 1 : 3);
}
/* eslint-enable */

const mdColors = (hexColor = '') => {
  const sourceColor = argbFromHex(`#${hexColor.replace('#', '')}`);
  const lightScheme = new SchemeTonalSpot(
    Hct.fromInt(sourceColor),
    false,
    0,
    '2025'
  );
  const darkScheme = new SchemeTonalSpot(
    Hct.fromInt(sourceColor),
    true,
    0,
    '2025'
  );
  const theme = { light: {}, dark: {} };
  lightScheme.colors.allColors.forEach((color) => {
    let name = color.name;
    if (name === 'surface_dim') name = 'surface_variant';
    if (name === 'surface_container_low') name = 'surface_1';
    if (name === 'surface_container') name = 'surface_2';
    if (name === 'surface_container_high') name = 'surface_3';
    if (name === 'surface_container_highest') name = 'surface_4';
    const argb = color.getArgb(lightScheme);
    theme.light[name] = argb;
  });
  darkScheme.colors.allColors.forEach((color) => {
    let name = color.name;
    if (name === 'surface_dim') name = 'surface_variant';
    if (name === 'surface_dim') name = 'surface_variant';
    if (name === 'surface_container_low') name = 'surface_1';
    if (name === 'surface_container') name = 'surface_2';
    if (name === 'surface_container_high') name = 'surface_3';
    if (name === 'surface_container_highest') name = 'surface_4';
    const argb = color.getArgb(darkScheme);
    theme.dark[name] = argb;
  });
  theme.light.surface_5 = argbFromHex(
    blend(
      hexFromArgb(theme.light.surface_4),
      hexFromArgb(theme.light.primary),
      0.05
    )
  );
  theme.dark.surface_5 = argbFromHex(
    blend(
      hexFromArgb(theme.dark.surface_4),
      hexFromArgb(theme.dark.primary),
      0.05
    )
  );

  const colors = {};
  const name = (n) => {
    return n.replace(/_/g, '-');
  };

  const shouldKeep = (prop) => {
    const keep = [
      'primary',
      'on_primary',
      'primary_container',
      'on_primary_container',
      'secondary',
      'on_secondary',
      'secondary_container',
      'on_secondary_container',
      'surface',
      'on_surface',
      'surface_variant',
      'on_surface_variant',
      'outline',
      'outline_variant',
      'surface_1',
      'surface_2',
      'surface_3',
      'surface_4',
      'surface_5',
    ];
    return keep.includes(prop);
  };

  Object.keys(theme.light).forEach((prop) => {
    if (!shouldKeep(prop)) return;
    colors[name(`md-light-${prop}`)] = hexFromArgb(theme.light[prop]);
  });
  Object.keys(theme.dark).forEach((prop) => {
    if (!shouldKeep(prop)) return;
    colors[name(`md-dark-${prop}`)] = hexFromArgb(theme.dark[prop]);
  });

  return colors;
};

export default mdColors;
