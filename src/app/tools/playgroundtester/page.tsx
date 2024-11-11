'use client'

import { useCallback, useEffect } from "react"

import debounce from 'lodash.debounce';

export default async function Page() {

  // Set display:none to iframes that are not viewable within the dom
  // This is to prevent the browser from rendering all iframes at once


  const onScroll = useCallback(() => {
    const iframes = document.querySelectorAll('iframe')
    iframes.forEach((iframe) => {
      const bounding = iframe.getBoundingClientRect();
      if (bounding.top > window.innerHeight || bounding.bottom < 0) {
        console.log("Hiding")
        iframe.style.display = 'none';
      } else {
        console.log("Showing")
        iframe.style.display = 'block';
      }
    });
  }, []);

  const debouncedScroll = debounce(onScroll, 500);

  useEffect(() => {
    window.addEventListener('scroll', debouncedScroll);
    onScroll();
    return () => window.removeEventListener('scroll', debouncedScroll);
  }, []);



  return <div>
    <h1>Playground tester</h1>
    <iframe src="https://staging.learn.enki.com/public/python-playground?readonly=true&startingcode=for%20i%20in%20range%281%2C%20101%29%3A%0A%20%20%20%20print%28i%29" height="600px" width="550px" className="codeplayground" loading="lazy"></iframe>
    <p>Intermediate text</p>
    <iframe src="https://staging.learn.enki.com/public/python-playground?readonly=true&startingcode=for%20i%20in%20range%281%2C%20101%29%3A%0A%20%20%20%20print%28i%29" height="600px" width="550px" className="codeplayground" loading="lazy"></iframe>
    <h1>Playground tester</h1>
    <iframe src="https://staging.learn.enki.com/public/python-playground?readonly=true&startingcode=for%20i%20in%20range%281%2C%20101%29%3A%0A%20%20%20%20print%28i%29" height="600px" width="550px" className="codeplayground" loading="lazy"></iframe>
    <p>Intermediate text</p>
    <iframe src="https://staging.learn.enki.com/public/python-playground?readonly=true&startingcode=for%20i%20in%20range%281%2C%20101%29%3A%0A%20%20%20%20print%28i%29" height="600px" width="550px" className="codeplayground" loading="lazy"></iframe>
    <h1>Playground tester</h1>
    <iframe src="https://staging.learn.enki.com/public/python-playground?readonly=true&startingcode=for%20i%20in%20range%281%2C%20101%29%3A%0A%20%20%20%20print%28i%29" height="600px" width="550px" className="codeplayground" loading="lazy"></iframe>
    <p>Intermediate text</p>
    <iframe src="https://staging.learn.enki.com/public/python-playground?readonly=true&startingcode=for%20i%20in%20range%281%2C%20101%29%3A%0A%20%20%20%20print%28i%29" height="600px" width="550px" className="codeplayground" loading="lazy"></iframe>
    <h1>Playground tester</h1>
    <iframe src="https://staging.learn.enki.com/public/python-playground?readonly=true&startingcode=for%20i%20in%20range%281%2C%20101%29%3A%0A%20%20%20%20print%28i%29" height="600px" width="550px" className="codeplayground" loading="lazy"></iframe>
    <p>Intermediate text</p>
    <iframe src="https://staging.learn.enki.com/public/python-playground?readonly=true&startingcode=for%20i%20in%20range%281%2C%20101%29%3A%0A%20%20%20%20print%28i%29" height="600px" width="550px" className="codeplayground" loading="lazy"></iframe>
  </div>
}