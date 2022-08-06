const PresentationSection = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen gap-y-4">
      <h1 className="text-4xl sm:text-6xl -mt-14">
        Hi! <span>👋🏼</span>
        <br />I{"'"}m{' '}
        <strong className="font-bold select-none title-name bg-clip-text bg-gradient-to-r from-secondary to-primary">
          Victor Arnedo
        </strong>
        .
      </h1>
      <p className="text-xl sm:text-3xl">I{"'"}m a frontend developer.</p>
      <style jsx>
        {`
          .title-name {
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>
    </section>
  );
};

export default PresentationSection;
