const Section = ({ title, tagLine, children }) => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col items-center">
        {title && <h2 className="text-3xl f text-center mb-8">{title}</h2>}
        {tagLine && (
          <p className="text-center text-gray-600 mb-12">{tagLine}</p>
        )}

        {children}
      </div>
    </section>
  );
};

export default Section;
