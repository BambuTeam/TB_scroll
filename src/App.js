import Header from './components/Home/Header';
import Screen1 from './components/Home/Screen1';
import Navbar  from './components/Home/Navbar';

import './assets/scss/style.scss';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


import './App.css';



const ZoomInScrollOut = batch( FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());


function App() {
  return (
    
    <ScrollContainer>
     
    <ScrollPage page={0}>
    <Animator animation={batch( Fade(), MoveOut )}>
    <Navbar />
    <Header />
    </Animator>
    </ScrollPage>


    <ScrollPage page={1}>
      <Animator animation={ZoomInScrollOut}>
    <Screen1 />
      </Animator>
      </ScrollPage>




    </ScrollContainer>

      
     
      

  );
}

export default App;
