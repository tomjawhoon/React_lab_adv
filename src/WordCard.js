import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import Diamond from './thank.gif';
import _ from 'lodash';

export default class WordCard extends Component {
    constructor(props) {
        super(props)
        this.state = prepareStateFromWord(this.props.value) //bnk 48
    }
    activationHandler = (c) => {
        console.log("TEST =>", c)
        console.log(`${c} has been activated.`)
        let guess = [this.state.guess] + c
        this.setState({ guess })
        console.log("GUESS_TOTAL_ONCLICK", `${guess}`)
        if (guess.length === this.state.chars.length) {
            if (guess === this.state.word) {
                this.setState({ guess: [], completed: true })
                console.log("กดถูกแล้วจร้า")
            } else {
                this.setState({ guess: [], attempt: this.state.attempt + 1 })
                console.log("กดผิดอะไรเยอะแยะวะ")
            }
        }

    }
    render() {
        let className = `${this.state.completed ? 'true' : 'false'}`
        console.log("show_classname", className)
        return (
            <div className="App">
                {
                    Array.from(this.state.chars).map( //วนรับไปเรื่อย ๆ
                        (c, i) => <CharacterCard value={c} key={i} attempt={this.state.attempt}
                            activationHandler={this.activationHandler}  />,
                    )
                }
                <dir className={className}>
                    <h1>{this.state.completed ? "" : "เดา มาไอ หนุ่ม"}</h1>
                    <h3>{this.state.completed ? "" : "จัดมา."}</h3>
                    <p>Round : {this.state.attempt}</p>
                    <p>{this.state.completed ? " you win" : ""}</p>
                    <p>{this.state.completed ? " ถูกแล้วไอหนุ่ม " : ""}</p>
                </dir>
                {this.state.completed ? <img src={Diamond} /> : ""}
            </div>


        )
    }
}

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false //ค่าเริ่มต้นกำหนดไว้ False
    }
}
