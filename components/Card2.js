import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { motion } from "framer-motion";
const Card2 = ( { title, state, cambiarEstado, content} ) => {
  return (
    <>
    { state &&
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    viewport={{once:false}}
    >
    <Container className='div p-3 mt-5 card-zondar'>
        <Row className ='titulo'>
            <div className='d-flex justify-content-between'>
            <div className='d-flex p-2 '>
                <div >
                    <h3 className='titulos text-white'>{ title } </h3>
                </div>
            </div>
            <div className='d-flex'>
                <div onClick={() => cambiarEstado(false)}>
                    <button className='bg-white borderr'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    </button>
                </div>
            </div>
            </div>
        </Row>
        <Row>
            <div>
                <p className='p-2 parrafos text-white'>{ content }</p>
            </div>
        </Row>
 
    </Container>
    </motion.div>
    }
    </>
  )
}

export default Card2