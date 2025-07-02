
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SearchFiltersProps {
  onSearch: (filters: {
    query: string;
    location: string;
    priceRange: string;
    roomType: string;
  }) => void;
}

const SearchFilters = ({ onSearch }: SearchFiltersProps) => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [roomType, setRoomType] = useState('');

  const handleSearch = () => {
    onSearch({
      query,
      location,
      priceRange,
      roomType
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search hostels..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger>
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="nairobi">Nairobi</SelectItem>
            <SelectItem value="mombasa">Mombasa</SelectItem>
            <SelectItem value="kisumu">Kisumu</SelectItem>
            <SelectItem value="nakuru">Nakuru</SelectItem>
            <SelectItem value="eldoret">Eldoret</SelectItem>
            <SelectItem value="thika">Thika</SelectItem>
          </SelectContent>
        </Select>

        <Select value={priceRange} onValueChange={setPriceRange}>
          <SelectTrigger>
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="0-5000">KES 0 - 5,000</SelectItem>
            <SelectItem value="5000-10000">KES 5,000 - 10,000</SelectItem>
            <SelectItem value="10000-15000">KES 10,000 - 15,000</SelectItem>
            <SelectItem value="15000+">KES 15,000+</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={handleSearch} className="bg-primary hover:bg-primary/90">
          <Filter className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchFilters;
