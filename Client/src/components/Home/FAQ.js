import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './CSS/faq.css'
import { useState, useEffect, useRef } from 'react';
import ScrollReveal, { reveal } from "scrollreveal";


export default function FAQ() {
    const revealRefBottom = useRef(null);
    const revealRefLeft = useRef(null);
    const revealRefTop = useRef(null);
    const revealRefRight = useRef(null);

    useEffect(() => {

        
        ScrollReveal().reveal(revealRefBottom.current, {
            
            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            easing: 'ease',
            reset: 'true',
        });
    }, []);
    useEffect(() => {

        
        ScrollReveal().reveal(revealRefRight.current, {
            
            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'right',
            easing: 'ease',
            reset: 'true',
        });
    }, []); useEffect(() => {

        
        ScrollReveal().reveal(revealRefLeft.current, {
            
            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'left',
            easing: 'ease',
            reset: 'true',
        });
    }, []); useEffect(() => {

        
        ScrollReveal().reveal(revealRefTop.current, {
            
            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'top',
            easing: 'ease',
            reset: 'true',
        });
    }, []);
    return (
        <div className='FAQ'>
            <h2 ref={revealRefTop}>Curious Mind Wants to Know</h2>
            <div className='Questions' ref={revealRefRight}>
                <Accordion className='accordian' >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className='heading'>How does it Work?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='answer'>
                            Our online voting system allows users to register, authenticate, and vote online, with votes stored securely in MongoDB.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='accordian' >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className='heading'>Is it Secure?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='answer'>
                        Yes, it is be secure with proper implementation of authentication, and authorization measures.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='accordian' >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className='heading'>Can I change my vote?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='answer'>
                            Once a vote is cast, it cannot be changed to ensure integrity.</Typography>
                    </AccordionDetails>
                </Accordion>
                
                <Accordion className='accordian' >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className='heading'>What if I forget to vote?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='answer'>
                        If you forget to vote, you will miss the opportunity to participate in the election.                        
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>
        </div>

    );
}