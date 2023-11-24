import React, { Component } from 'react';
import up from '../button.svg';
import wave1 from '../wave1.svg'
import wave2 from '../wave2.svg'
import '../css/uploadbutton.css';
import { motion } from 'framer-motion';


class UploadButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
      clicked: false,
      isOpen: false
    };
  }


  handleHoverStart = () => {
    this.setState({ isHovered: true });
  };

  handleHoverEnd = () => {
    this.setState({ isHovered: false });
  };

  handleButtonClick = () => {
    if (!this.state.isOpen) {
      this.setState({ clicked: true})
    }
  }

  handleLoginClick = (event) => {
    event.stopPropagation();
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <div>
        <motion.button
          className='login'
          onClick={this.handleLoginClick}
        >login</motion.button>
        <motion.div
          layout
          data-isOpen={this.state.isOpen}
          style={{overflow:'hidden', position:'relative'}}
          onHoverStart={this.handleHoverStart}
          onHoverEnd={this.handleHoverEnd}
          onClick={this.handleButtonClick}
          className='upload'
          initial={{borderRadius: 75}}
          // animate={{
          //   backgroundColor: this.state.clicked ? '#A2D2FF' : '#CDB4DB'
          // }}
          // transition={{
          //   duration: 2
          // }}
          whileHover={{
            y: this.state.isOpen? 0 : this.state.clicked ? 0: -10,
          }}
        >
          {!this.state.isOpen && (
            <motion.img
            initial={{
              y: 0,
            }}
            animate={{
                y: this.state.clicked ? -120 : this.state.isHovered ? -10 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30,
            }}
            src={up}
            alt="Up Arrow"
          />
          )}
          {this.state.isOpen && (
            <motion.form
              initial={{
                opacity:0
              }}
              animate={{
                opacity:100
              }}
              transition={{
                duration:1
              }}
              className='loginForm'
            >
              <label>Name</label>
              <input type='text'></input>
              <label>Password</label>
              <input type='password'></input>
              <button type='submit'>submit</button>
            </motion.form>
          )}

          {
            this.state.clicked && !this.state.isOpen && (
              <motion.img
                className='red-box'
                initial={{
                  y:200
                }}
                animate={{
                  y: 0,
                  x: 75
                }}
                transition={{
                  duration: 4,
                  ease: 'easeInOut',
                }}
                src={wave1}
                alt='wave1'
              />
            )
          }
          {
            this.state.clicked && (
              <motion.img
                className='red-box'
                initial={{
                  y:200
                }}
                style={{
                  zIndex:-1
                }}
                animate={{
                  y: 0,
                  x: 75
                }}
                transition={{
                  duration: 5,
                  ease: 'easeInOut',
                }}
                src={wave2}
                alt='wave2'
              />
            )
          }
        </motion.div>
      </div>
    );
  }
}

export default UploadButton;
