function customRender(reactElement, container) {
    const docElement = document.createElement(reactElement.type); 
    docElement.innerHTML = reactElement.children; // Corrected 'innerHTML' and 'children'
    docElement.setAttribute('href', reactElement.props.href);
    docElement.setAttribute('target', reactElement.props.target);
    docElement.style.color = "black"; // Corrected 'color'
  
    container.appendChild(docElement);
  }
  
  const reactElement = {
      type: 'a',
      props: {
          href: 'https://google.com',
          target: '_blank'
      },
      children: "Click me to visit Google"  // Fixed typo 'cilderen' → 'children'
  };
  
  const mainContainer = document.querySelector('#root');
  customRender(reactElement, mainContainer);
  
