import React, {Component} from 'react';
import getPassPhrase from '../phrase_generator';
class IndexComponent extends Component {
    constructor() {
        super();
        this.state = {
            passphrase: ''
        };
        this.dictLocales = {
            'en': 'English',
            'fr': 'Francais',
            'de': 'Deutsch',
            'es': 'Español',
            'it': 'Italiano',
            'ru': 'Русский',
            'zh-CN': '汉语',
            'nb-NO': 'Norsk (Bokmål)',
            'tr': 'Türkçe',
            'hu': 'Magyar'
        };
        this.generatePassphrase = this.generatePassphrase.bind(this);
    }

    componentDidMount() {
        this.generatePassphrase();
    }

    generatePassphrase() {
        getPassPhrase(this.refs.lang.value, this.refs.wordCount.value)
            .then(phrase=>this.setState({passphrase: phrase}));
    }

    render() {
        var localeNodes = Object.keys(this.dictLocales).map(l => <option value={l}>{this.dictLocales[l]}</option>);
        return (
            <div className="flex-col flex-align-center flex-justify-center" style={{'height': '100vh'}}>

                <h1>
                    {this.state.passphrase}
                </h1>
                <div className="flex-row">
                    <div className="input-group">
                        <label htmlFor="lang">Language</label>
                        <select ref="lang" id="lang" onChange={this.generatePassphrase} value='en' className="flex-row flex-align-center">
                            {localeNodes}
                        </select>

                    </div>

                    <div className="input-group">
                        <label htmlFor="wordCount">Length</label>
                        <select ref="wordCount" id="wordCount" onChange={this.generatePassphrase}  className="flex-row flex-align-center">
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="8">7</option>
                            <option value="8">8</option>
                            <option value="8">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div className="flex-col flex-justify-end">
                        <div className="button base-margin lr" onClick={this.generatePassphrase}>Generate</div>
                    </div>
                </div>

            </div>);
    }

}

export default IndexComponent;
