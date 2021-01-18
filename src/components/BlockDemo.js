import Block from '../tailwind-mobile/components/Block';
import BlockFooter from '../tailwind-mobile/components/BlockFooter';
import BlockHeader from '../tailwind-mobile/components/BlockHeader';
import BlockTitle from '../tailwind-mobile/components/BlockTitle';

export default function BlockDemo() {
  return (
    <>
      <BlockTitle className="text-4xl">Content Block</BlockTitle>
      <Block>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </Block>
      <BlockTitle>Block Title</BlockTitle>
      <Block strong>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </Block>
      <BlockTitle>With Header & Footer</BlockTitle>
      <BlockHeader>Header</BlockHeader>
      <Block strong>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </Block>
      <BlockFooter>Footer</BlockFooter>
      <BlockTitle className="text-2xl">Medium Title</BlockTitle>
      <Block strong>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </Block>
      <BlockTitle className="text-3xl">Large Title</BlockTitle>
      <Block strong>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </Block>

      <BlockTitle>Inset Block</BlockTitle>
      <Block strong inset>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </Block>
    </>
  );
}
