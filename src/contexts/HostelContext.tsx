
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Hostel {
  id: string;
  name: string;
  location: string;
  price: string;
  description: string;
  amenities: string[];
  images: string[];
  ownerName: string;
  contactInfo: string;
  createdAt: Date;
}

interface HostelContextType {
  hostels: Hostel[];
  addHostel: (hostel: Omit<Hostel, 'id' | 'createdAt'>) => void;
  getHostelsByLocation: (location: string) => Hostel[];
}

const HostelContext = createContext<HostelContextType | undefined>(undefined);

export const HostelProvider = ({ children }: { children: ReactNode }) => {
  const [hostels, setHostels] = useState<Hostel[]>([]);

  const addHostel = (hostelData: Omit<Hostel, 'id' | 'createdAt'>) => {
    const newHostel: Hostel = {
      ...hostelData,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    
    setHostels(prev => [...prev, newHostel]);
    console.log('New hostel added:', newHostel);
  };

  const getHostelsByLocation = (location: string) => {
    return hostels.filter(hostel => 
      hostel.location.toLowerCase().includes(location.toLowerCase())
    );
  };

  return (
    <HostelContext.Provider value={{ hostels, addHostel, getHostelsByLocation }}>
      {children}
    </HostelContext.Provider>
  );
};

export const useHostels = () => {
  const context = useContext(HostelContext);
  if (context === undefined) {
    throw new Error('useHostels must be used within a HostelProvider');
  }
  return context;
};
