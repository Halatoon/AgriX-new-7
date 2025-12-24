
import { useEffect, useRef } from 'react';

/**
 * Options for the useReveal hook, extending standard IntersectionObserver options.
 */
interface UseRevealOptions extends IntersectionObserverInit {
  once?: boolean;
}

// Added UseRevealOptions type to options parameter to fix 'once' property access errors
export const useReveal = (options: UseRevealOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Added type definition to fix: Property 'once' does not exist on type '{}'
          if (options.once) observer.unobserve(entry.target);
        } else if (!options.once) {
          // Added type definition to fix: Property 'once' does not exist on type '{}'
          entry.target.classList.remove('active');
        }
      });
    }, {
      threshold: 0.15,
      ...options
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
    // Added type definition to fix: Property 'once' does not exist on type '{}'
  }, [options.once]);

  return ref;
};
