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
            'hu': 'Magyar',
            'cs': 'Čeština',
            'jp': '日本語',
            'pt-BR':'Português (Brasileiro)'
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
        var localeNodes = Object.keys(this.dictLocales).map(l => <option key={this.dictLocales[l]} value={l}>{this.dictLocales[l]}</option>);
        return (
          <div className="main">
          <div className="content-section">
              <div className="content-wrapper">
                  <div key={'passphrase-generator'} className="flex-responsive-row flex-align-baseline content">
                      <div className="flex-col flex-grow-1">
                          <h1>
                              <div className="md-subhead">Your Passphrase</div>
                              {this.state.passphrase}
                          </h1>
                          <div className="flex-responsive-row">
                              <div className="input-group">
                                  <label htmlFor="lang">Language</label>
                                  <select ref="lang" id="lang" onChange={this.generatePassphrase} defaultValue='en' className="flex-row flex-align-center">
                                      {localeNodes}
                                  </select>

                              </div>

                              <div className="input-group">
                                  <label htmlFor="wordCount">Length</label>
                                  <select ref="wordCount" id="wordCount" onChange={this.generatePassphrase}  className="flex-row flex-align-center">
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10">10</option>
                                  </select>
                              </div>
                              <div className="flex-col flex-justify-end">
                                  <div className="button base-margin lr" onClick={this.generatePassphrase}>Generate</div>
                              </div>
                          </div>
                      </div>
                      <div className="flex-col sidebar flex-shrink-0">
                          <div className="md-title ">Peerio Blog</div>
                          <p>
                            <a href="https://www.peerio.com/blog/posts/how-to-build-a-billion-dollar-password-2018/">How to Build a Billion Dollar Password</a>
                            <div className="caption">The Beginner’s Guide to Passwords</div>
                          </p>

                          <div className="download-peerio">
                              <div className="download-peerio-header">Simple security by <strong>Peerio</strong></div>
                              <div className="download-peerio-content caption">
                                  <a href="https://www.peerio.com" target="_blank">Download our cross-platform app</a> for more features like encrypted messaging, emails, file sharing, and cloud storage</div>
                          </div>
                      </div>
                  </div>
                </div>
          </div>
          <footer className="main-footer flex-shrink-0">
            <div className="content-wrapper">
              <div className="footer-info">
                <div className="flex-col">
                  <a className="logo" target="_blank" href="http://www.peerio.com"></a>
                </div>
                <div className="flex-row flex-align-center">
                  <div className="caption">
                    <a href="mailto:press@peerio.com">Press</a> |
                    <a href="https://github.com/PeerioTechnologies/peerio-documentation/blob/master/Terms_of_Use.md" target="_blank">Terms</a> |
                    <a href="https://github.com/PeerioTechnologies/peerio-documentation/blob/master/Privacy_Policy.md" target="_blank">Privacy</a>
                  </div>
                  <ul className="social">
                    <li>
                      <a className="fa fa-facebook-official" href="https://www.facebook.com/peerioapp" target="_blank"></a>
                    </li>
                    <li>
                      <a className="fa fa-twitter" href="https://twitter.com/peerio" target="_blank"></a>
                    </li>
                    <li>
                      <a className="fa fa-github" href="https://github.com/PeerioTechnologies/peerio-web-passphrase-generator" target="_blank"></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-info flex-align-center" style={{justifyContent: 'space-between'}}>
                <div className="caption">
                  &copy; <span data-year="currentYear"></span> Technologies Peerio Inc.
                </div>
                <div className="caption">
                  Contact us on Peerio at username <strong>Peerio</strong>
                </div>
              </div>
            </div>
          </footer>
        </div>);
    }

}

export default IndexComponent;
