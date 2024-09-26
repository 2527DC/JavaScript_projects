import React from 'react';
import './App.css'; // Ensure to create an App.css file for styles

const StylishFontsExample = () => {
  const title = "Hello, I am Chethan R.";
  const subtitle = "A Web Designer and Web Developer";

  return (
    <div className="container">
      <h1 className="title">{animateText(title)}</h1>
      <h2 className="subtitle">{animateText(subtitle)}</h2>
      <p className="text creepster">Hello, I am Chethan R. A Web Designer and Web Developer.</p>
      <p className="text abril">Hello, I am Chethan R. A Web Designer and Web Developer.</p>
      <p className="text quicksand">Hello, I am Chethan R. A Web Designer and Web Developer.</p>
      <p className="text sacramento">Hello, I am Chethan R. A Web Designer and Web Developer.</p>
      <p className="text rockSalt">Hello, I am Chethan R. A Web Designer and Web Developer.</p>
      <p className="text bitter">Hello, I am Chethan R. A Web Designer and Web Developer.</p>
      <p className="text fredericka">Hello, I am Chethan R. A Web Designer and Web Developer.</p>
      <p className="text amatic">Hello, I am Chethan R. A Web Designer and Web Developer.</p>
      <p className="text dancing">Hello, I am Chethan R. A Web Designer and Web Developer.</p>
      <p className="text indie">Hello, I am Chethan R. A Web Designer and Web Developer.</p>
      <p className="text lobster">Hello, I am Chethan R. A Web Designer and Web Developer.</p>
      <p className="text satisfy">Hello, I am Chethan R. A Web Designer and Web Developer.</p>
      <p className="text playball">Hello, I am Chethan R. A Web Designer and Web Developer.</p>
      <p className="text specialElite">Hello, I am Chethan R. A Web Designer and Web Developer.</p>
      <p className="text patua">Hello, I am Chethan R. A Web Designer and Web Developer.</p>
      <p className="text righteous">Hello, I am Chethan R. A Web Designer and Web Developer.</p>
      <p className="text gloock">Hello, I am Chethan R. A Web Designer and Web Developer.</p>
      <p className="text bangers">Hello, I am Chethan R. A Web Designer and Web Developer.</p>
      <p className="text suez">Hello, I am Chethan R. A Web Designer and Web Developer.</p>
      <p className="text pinyon">Hello, I am Chethan R. A Web Designer and Web Developer.</p>
    </div>
  );
};

// Function to animate text letter by letter
const animateText = (text) => {
  return (
    <span>
      {text.split('').map((letter, index) => (
        <span key={index} className="letter" style={{ animationDelay: `${index * 0.1}s` }}>
          {letter}
        </span>
      ))}
    </span>
  );
};

export default StylishFontsExample;
