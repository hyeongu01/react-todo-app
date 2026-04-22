import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Portal({ children }: { children: React.ReactNode }) {
  const [container] = useState<HTMLDivElement>(() => {
    const el = document.createElement('div');
    el.className = 'portal-container';
    return el;
  });

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      container.remove();
    };
  }, [container]);

  return createPortal(children, container);
}

export default Portal;
