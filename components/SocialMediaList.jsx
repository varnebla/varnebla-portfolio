const SocialMediaList = () => {
  return (
    <div className="flex justify-around max-w-sm mx-auto text-lg md:text-xl gap-x-2">
      <a
        href="https://github.com/varnebla"
        className="underline hover:text-secondary"
      >
        Github
      </a>
      -
      <a
        href="https://www.linkedin.com/in/victor-arnedo-blanco/"
        className="underline hover:text-secondary"
      >
        LinkedIn
      </a>
      -
      <a
        href="https://twitter.com/varnebla"
        className="underline hover:text-secondary"
      >
        Twitter
      </a>
      -
      <a
        href="mailto:victor.arnedo.93@gmail.com"
        className="underline hover:text-secondary"
      >
        Email
      </a>
    </div>
  );
};

export default SocialMediaList;
