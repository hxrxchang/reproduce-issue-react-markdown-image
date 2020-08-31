import ReactMarkdown from 'react-markdown';

export default function Home() {
  const markdownString =
    '# Sample\n\n![dog](https://images.dog.ceo/breeds/puggle/IMG_084828.jpg)\n\n```console.log("1111111");```\n\n![cat](https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2758&q=80)';

  console.log(markdownString);
  return (
    <ReactMarkdown source={markdownString} escapeHtml={false}></ReactMarkdown>
  );
}
