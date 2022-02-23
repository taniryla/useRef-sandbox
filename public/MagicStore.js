// what react does internally

const nameRef_INVISIBLE = {
  current: "Lucas"
};

const magicStoreOfAllRefs = {
  nameRef: nameRef_INVISIBLE
};

const useRef = () => {
  return magicStoreOfAllRefs.nameRef;
};

// all above is internal in react

const MyComponent = () => {
  // useState1
  // useState2 will always re-render your component
  const [name, setName] = useState("Lucas");

  // useRef1
  const nameRef = useRef("Lucas");
  console.log(nameRef.current);
  nameRef.current = "Lucy"; // mutates the nameRef object value
};

MyComponent();
