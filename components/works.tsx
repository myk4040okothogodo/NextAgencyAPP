import React from 'react'
import {Tile, TileWrapper,TileBackground, TileContent} from './tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkRight, WorkLink } from './work'
import Image from 'next/image'



const Works = () => (
    <TileWrapper numOfPages={3}>
        <TileBackground>
            <WorkBackground />
        </TileBackground>
        <TileContent>
            <Tile 
                page={0} 
                renderContent={({progress}) => (
                  <WorkContainer>
                    <WorkLeft progress={progress}>
                      <div>We built,</div>
                      <div className="text-4xl md:text-5xl font-semibold tracking-tight"><WorkLink href="https://pinkpanda.io/">Pink Panda</WorkLink>&apos;apps</div>
                    </WorkLeft>
                    <WorkRight progress={progress}>
                        <Image 
                            src="/assets/works/pinkpanda.png" 
                            layout="responsive"  
                            width={840} 
                            height={1620} 
                            alt="PinkPanda"
                            />
                    </WorkRight>
                  </WorkContainer>
                )}
            ></Tile>
            <Tile 
                page={1} 
                renderContent={({progress}) => ( 
                  <WorkContainer>
                    <WorkLeft progress={progress}>
                      <div>We made,</div>
                      <div className="text-4xl md:text-5xl font-semibold tracking-tight"><WorkLink href="https://steakwallet/">SteakWallet</WorkLink>&nbsp;faster</div>
                    </WorkLeft>
                    <WorkRight progress={progress}>
                        <Image 
                           src="/assets/works/steakWallet.webp" 
                           layout="responsive"  
                           width={840} 
                           height={1620} 
                           alt="steakWallet"
                           />
                    </WorkRight>
                  </WorkContainer>
                  )}
            ></Tile>
            <Tile 
                page={2} 
                renderContent={({progress}) => ( 
                  <WorkContainer>
                    <WorkLeft progress={progress}>
                      <div>We helped,</div>
                      <div className="text-4xl md:text-5xl font-semibold tracking-tight"><WorkLink href="https://showtime/">Showtime</WorkLink> ship faster</div>
                    </WorkLeft>
                    <WorkRight progress={progress}>
                        <Image 
                            src="/assets/works/showtime.jpeg" 
                            layout="responsive"  
                            width={840} 
                            height={1620} 
                            alt="steakWallet"
                            />
                    </WorkRight>
                  </WorkContainer>
                  )}
            ></Tile>
        </TileContent>
    </TileWrapper>
)


export default Works;
