import React from 'react'
import { MainLayout } from '../components/MainLayout'
import { HeroSection } from '../components/HeroSection';
import { PostCreator } from '../components/PostCreator';
export const HomePage = () => {
  return (
    <div className='font-Kanit'>
        <MainLayout>
          <HeroSection/>
          <PostCreator/>
        </MainLayout>
        
    </div>
  );
}
