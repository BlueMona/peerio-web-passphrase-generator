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
            <fieldset key={'signup-step-1'}>

                <p className="txt-lrg">
                    {this.state.passphrase}
                </p>
                <div className="flex-row">
                    <div className="input-group flex-grow-1">
                        <label htmlFor="lang">Language</label>
                        <select ref="lang" id="lang" onChange={this.generatePassphrase} value='en'>
                            {localeNodes}
                        </select>

                    </div>

                    <div className="input-group">
                        <label htmlFor="wordCount">Length</label>
                        <select ref="wordCount" id="wordCount" onChange={this.generatePassphrase}>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="8">7</option>
                            <option value="8">8</option>
                            <option value="8">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                </div>
                <div className="buttons">
                    <div className="btn-primary" onClick={this.generatePassphrase}>Generate</div>
                </div>
            </fieldset>);
    }

}

export default IndexComponent;
