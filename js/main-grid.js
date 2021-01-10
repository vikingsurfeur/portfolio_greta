// MAGIC GRID PHOTOGRAPHY

let magicGrid = new MagicGrid({
    container: '.masonry',
    animate: true,
    gutter: 50,
    maxColumns: 5,
    static: true,
    useMin: true,
});

magicGrid.listen();
