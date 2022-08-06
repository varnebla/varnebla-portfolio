import Head from 'next/head';
import TheHeader from '../components/TheHeader';
import TheFooter from '../components/TheFooter';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-full">
      <TheHeader />
      <main className="max-w-3xl px-6 mx-auto">{children}</main>
      <TheFooter />
    </div>
  );
};

export default Layout;
