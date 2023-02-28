function Greetings({ lang, children }) {
  return (
    <div>
      {lang === 'de' && <p>Grüße {children}</p>}
      {lang === 'en' && <p>Greetings {children}</p>}
      {lang === 'es' && <p>Buenos dias {children}</p>}
      {lang === 'fr' && <p>bon jour {children}</p>}
    </div>
  );
}

export default Greetings;
