import React, { useEffect } from "react";
import "./Timeline.css";

const Timeline = () => {
  // Check if an element is in the viewport
  function isElementInViewport(el: Element): boolean {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  const callbackFunc = () => {
    const items = document.querySelectorAll(".timeline li");
    items.forEach((item) => {
      if (isElementInViewport(item as HTMLElement)) {
        item.classList.add("in-view");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("load", callbackFunc);
      window.removeEventListener("resize", callbackFunc);
      window.removeEventListener("scroll", callbackFunc);
    };
  }, []);

  return (
    <section className="timeline">
      <h1>Timeline</h1>
      <ul>
        <li>
          <div>
            <time>2025-01-20</time> Registration Opens
          </div>
        </li>
        <li>
          <div>
            <time>2025-02-20</time> Registration Closes
          </div>
        </li>
        <li>
          <div>
            <time>2025-02-27</time> Hackathon Day 1
          </div>
        </li>
        <li>
          <div>
            <time>2025-02-28</time> Hackathon Day 2
          </div>
        </li>
        <li>
          <div>
            <time>2025-02-28</time> Evening: Validator Meetings
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Timeline;
