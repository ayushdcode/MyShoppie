import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';

import useStyles from './styles';
// import img1 from '../../assets/download.jpg';
// import img2 from '../../assets/images.jpg';

// const products =[
//     { id: 1, name: 'Shoes', description: 'Running Shoes.', price: 'RS 5', image: img1},
//     {id: 2, name: 'Macbook', description: 'Apple Macbook', price: 'RS 10', image: img2}
// ];

const Products = ({products, onAddToCart}) => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key = {product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />    
                    </Grid>
                ))}
            </Grid>
        </main>
    );
    
}

export default Products;