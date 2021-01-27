const PreloaderIOS = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      {...props}
    >
      <g fill-rule="evenodd" transform="translate(-.5)">
        <rect width="2" height="7" x="9.5" rx="1" />
        <rect width="2" height="7" x="9.5" y="13" opacity=".64" rx="1" />
        <rect
          width="2"
          height="7"
          x="16"
          y="6.5"
          opacity=".82"
          rx="1"
          transform="rotate(-90 17 10)"
        />
        <rect
          width="2"
          height="7"
          x="3"
          y="6.5"
          opacity=".46"
          rx="1"
          transform="rotate(-90 4 10)"
        />
        <rect
          width="2"
          height="7"
          x="4.904"
          y="1.904"
          opacity=".37"
          rx="1"
          transform="rotate(-45 5.904 5.404)"
        />
        <rect
          width="2"
          height="7"
          x="14.096"
          y="11.096"
          opacity=".73"
          rx="1"
          transform="rotate(-45 15.096 14.596)"
        />
        <rect
          width="2"
          height="7"
          x="14.096"
          y="1.904"
          opacity=".91"
          rx="1"
          transform="rotate(-135 15.096 5.404)"
        />
        <rect
          width="2"
          height="7"
          x="4.904"
          y="11.096"
          opacity=".55"
          rx="1"
          transform="rotate(-135 5.904 14.596)"
        />
      </g>
    </svg>
  );
};

export default PreloaderIOS;
