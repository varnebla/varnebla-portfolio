import Link from 'next/link';
export default function Custom404() {
  return (
    <div className="flex flex-col items-center">
      <h1>Sorry, we haven{"'"}t found what you where looking for.</h1>
      <Link href="/">Go to home page</Link>
    </div>
  );
}
