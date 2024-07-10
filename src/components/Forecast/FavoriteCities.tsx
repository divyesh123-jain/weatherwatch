import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';

interface FavoriteCitiesProps {
  favorites: string[];
  onRemoveFavorite: (city: string) => void;
  onSelectFavorite: (city: string) => void;
}

const FavoriteCities: React.FC<FavoriteCitiesProps> = ({ favorites, onRemoveFavorite, onSelectFavorite }) => {
  return (
    <Box sx={{ width: { xs: '100%', md: '20%' ,color:'#c9c5b6' }, mt: 2,  }}>
      <Typography variant="h5" color='#c9c5b6' gutterBottom>
        Favorite Cities
      </Typography>
      {favorites.map((city) => (
        <Card  key={city} sx={{ mb: 2, }} >
          <CardContent sx={{}}>
            <Typography variant="h6">{city}</Typography>
          </CardContent>
          <CardActions>
            <Button 
              size="small" 
              color="primary" 
              startIcon={<FavoriteIcon />} 
              onClick={() => onSelectFavorite(city)}
            >
              View
            </Button>
            <Button 
              size="small" 
              color="secondary" 
              startIcon={<DeleteIcon />} 
              onClick={() => onRemoveFavorite(city)}
            >
              Remove
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default FavoriteCities;
