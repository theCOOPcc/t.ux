import React from 'react';
import { render, screen } from '@testing-library/react';
import {ImageTile} from './ImageTile';

/**
 * Template:
 * Given x situation or predicate
 * When y occurs
 * Then z response should be verified
 */

/**
 * // This is testing that we properly support fully-fleshed out image tiles
 * Given a properly formatted image component
 * When it gets rendered
 * Then it should have a proper alt, title, and image src property
 */
test('rendering all image properties', () => {
    render(<ImageTile src="foo.com/bar.jpg" alt="some alt text" title="some text shown when a user hovers over the image"/>);
    const linkElement = screen.getByAltText(/some alt text/i);
    expect(linkElement).toBeInTheDocument();
});

/**
 * // This is testing that we properly support optional alt/titles for images
 * Given a image component without a passed in alt/title
 * When it gets rendered
 * Then it should only have an image src property
 */
// TODO: Cory
test('Rendering only required image properties', () => {
    render(<ImageTile src="foo.com/bar.jpg"/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

/**
 * // this is actually a nice property of using types- we want to build logic into the
 * //   component to deal with missing image src
 * Given an image component without a src property
 * When this component is rendered
 * Then the default image should be shown
 */
// TODO: Dan
test('Rending a default image if none is supplied', () => {
    render(<ImageTile />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
