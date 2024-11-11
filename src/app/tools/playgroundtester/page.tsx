'use client'

import { useCallback, useEffect } from "react"

import debounce from 'lodash.debounce';

export default async function Page() {

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