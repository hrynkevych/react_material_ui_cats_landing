import * as React from 'react';
import { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Typography, useMediaQuery } from '@mui/material';
import theme from '../../styles/index.js' 

export default function ImageContent() {
  const itemData = [
    {
      img: "https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Shyster",
      id: 1
    },
    {
      img: "https://images.pexels.com/photos/1828875/pexels-photo-1828875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Lazy",
      id: 2
    },
    {
      img: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Brandy",
      id: 3
    },
    {
      img: "https://images.pexels.com/photos/977935/pexels-photo-977935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Milk",
      id: 4
    },
    {
      img: "https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Blinds",
      id: 5
    },
    {
      img: "https://images.pexels.com/photos/1741206/pexels-photo-1741206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Charles",
      id: 6
    },
    {
      img: "https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Laptop",
      id: 7
    },
    {
      img: "https://images.pexels.com/photos/1317844/pexels-photo-1317844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Dorothy",
      id: 8
    },
    {
      img: "https://images.pexels.com/photos/755834/pexels-photo-755834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Feather",
      id: 9
    },
    {
      img: "https://images.pexels.com/photos/2686914/pexels-photo-2686914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Storm",
      id: 10
    },
    {
      img: "https://images.pexels.com/photos/3525298/pexels-photo-3525298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Candy",
      id: 11
    },
    {
      img: "https://images.pexels.com/photos/2361952/pexels-photo-2361952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Sporty",
      id: 12
    },
    {
      img: "https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Fluffy",
      id: 13
    },
  ];
const [column, setColumn] = useState(0);

const xs = useMediaQuery(theme.breakpoints.up('xs'));
const md = useMediaQuery(theme.breakpoints.up('sm'));
const lg = useMediaQuery(theme.breakpoints.up('md'));

useEffect(() => {
  if(xs) {
    setColumn(1)
  }
  if(md) {
    setColumn(2)
  }
  if(lg) {
    setColumn(3)
  }
}, [xs, md, lg])

  return (
    <Box component='div' sx={{margin: '0 5vw 5vw'}}>
    <Typography variant='h5' textAlign={'center'} sx={{marginTop: '15px'}}>
      Waiting for their owners
    </Typography>
    
      <ImageList cols={column}
        variant="masonry" gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton>
                  <FavoriteIcon
                    sx={{
                      color: 'light.main',
                      '&:hover': {
                        color: 'primary.main'}
                    }}
                  />
                </IconButton>
              }
              
            />
          </ImageListItem>
        ))}
      </ImageList>
      </Box>
  );
}