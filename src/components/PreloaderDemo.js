import Block from '../tailwind-mobile/components/Block';
import BlockTitle from '../tailwind-mobile/components/BlockTitle';
import Preloader from '../tailwind-mobile/components/Preloader';

export default function PreloaderDemo() {
  return (
    <>
      <BlockTitle className="text-4xl">Preloader</BlockTitle>

      <BlockTitle>Default</BlockTitle>
      <Block strong className="text-center">
        <Preloader />
      </Block>

      <BlockTitle>Colors</BlockTitle>
      <Block strong className="grid grid-cols-4">
        <div className="text-center">
          <Preloader colors={{ text: 'text-red-500' }} />
        </div>
        <div className="text-center">
          <Preloader colors={{ text: 'text-green-500' }} />
        </div>
        <div className="text-center">
          <Preloader colors={{ text: 'text-pink-500' }} />
        </div>
        <div className="text-center">
          <Preloader colors={{ text: 'text-yellow-500' }} />
        </div>
      </Block>

      <BlockTitle>Sizes</BlockTitle>
      <Block strong className="grid grid-cols-4 items-center">
        <div className="text-center">
          <Preloader size="w-4 h-4" />
        </div>
        <div className="text-center">
          <Preloader size="w-8 h-8" />
        </div>
        <div className="text-center">
          <Preloader size="w-12 h-12" />
        </div>
        <div className="text-center">
          <Preloader size="w-16 h-16" />
        </div>
      </Block>
    </>
  );
}
