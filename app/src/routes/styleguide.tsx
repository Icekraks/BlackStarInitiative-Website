export default function Index() {
  return (
    <div className="w-[100%] py-12 px-8 lg:py-16 2xl:py-24 lg:px-16">
      <h1 className="heading-1">Heading 1</h1>
      <h2 className="heading-2">Heading 2</h2>
      <h3 className="heading-3">Heading 3</h3>
      <h4 className="heading-4">Heading 4</h4>
      <h5 className="heading-5">Heading 5</h5>
      <h6 className="heading-6">Heading 6</h6>
      <p>Paragraph</p>
      <a href="https://example.com">Link</a>
      <code>Code</code>
      <pre>Pre</pre>
      <blockquote>Blockquote</blockquote>
      <ul>
        <li>Unordered List</li>
      </ul>
      <ol>
        <li>Ordered List</li>
      </ol>
      <div className="flex gap-2">
        <div className="bg-bsi-red w-[50px] h-[50px]" />
        <div className="bg-bsi-black w-[50px] h-[50px]" />
        <div className="bg-bsi-white w-[50px] h-[50px]" />
        <div className="bg-bsi-pure-white w-[50px] h-[50px]" />
      </div>
    </div>
  );
}
