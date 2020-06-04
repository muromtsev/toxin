function importAll(resolve) {
    resolve.keys().forEach(resolve);
}
importAll(require.context('../img', true, /\.(jpg|png|svg|png)$/));

importAll(require.context('../sass', true, /\.(css|scss)$/));
importAll(require.context('../pug', true, /\.(css|scss|jpg|png|svg|png|ico|xml|mp4|)$/));
importAll(require.context('../pug', true, /\.(css|scss)$/));

importAll(require.context('./', true, /\.(js)$/));
importAll(require.context('../pug', true, /\.(js)$/));







