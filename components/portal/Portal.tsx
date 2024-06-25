import { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: ReactNode;
  selector: string;
}

const Portal: React.FC<PortalProps> = ({ children, selector }) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const selectedElement = document.getElementById(selector);
    setElement(selectedElement);
  }, [selector]);

  if (!element) return null;

  return ReactDOM.createPortal(children, element);
};

export default Portal;
