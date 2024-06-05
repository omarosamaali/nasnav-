import imageOne from '../images/Group 575@2x.png'
import imageTwo from '../images/Group 583@2x.png'
import imageThree from '../images/Group 589@2x.png'
import imageFour from '../images/Group 597@2x.png'
// Dummy Data
const products = [
    {
      id: 1,
      image: imageOne,
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      price: '9,999',
      eg: ' LE',
      sale: '9,999',
      discound: '50%',
      from:'Pickup From',
      to:'Genena Mall'
    },
    {
      id: 2,
      image: imageTwo,
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      price: '9,999',
      eg: 'LE',
      sale: '9,999',
      from:'From',
      to:'UK',
      fromTwo: 'To',
      toTwo :'Egypt',
      in:'in',
      days:'10'
    },
    {
      id: 3,
      image: imageThree,
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      price: '9,999',
      eg: ' LE',
      sale: '9,999',
      discound: '30%',
      from:'Pickup From',
      to:'Genena Mall'
    },
    {
      id: 4,
      image: imageFour,
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      price: '9,999',
      eg: 'LE',
      sale: '9,999',
      discound: '70%',
      from:'From',
      to:'Egypt',
      fromTwo: 'To',
      toTwo :'Egypt',
      in:'in',
      days:'2 Days'
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      // Simulate an API call delay
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  