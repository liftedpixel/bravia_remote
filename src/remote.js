import React, { Component } from 'react';

const commands = {
  powerOff: "AAAAAQAAAAEAAAAvAw==",
  volumeUp: "AAAAAQAAAAEAAAASAw==",
  volumeDown: "AAAAAQAAAAEAAAATAw==",
  mute: "AAAAAQAAAAEAAAAUAw==",
  channelUp: "AAAAAQAAAAEAAAAQAw==",
  channelDown: "AAAAAQAAAAEAAAARAw==",
  previousChannel: "AAAAAQAAAAEAAAA7Aw==",
  cursorUp: "AAAAAQAAAAEAAAB0Aw==",
  cursorDown: "AAAAAQAAAAEAAAB1Aw==",
  cursorLeft: "AAAAAQAAAAEAAAA0Aw==",
  cursorRight: "AAAAAQAAAAEAAAAzAw==",
  enter: "AAAAAQAAAAEAAABlAw==",
  inputChange: "AAAAAQAAAAEAAAAlAw==",
  menu: "AAAAAgAAABoAAABhAw+Aw==",
  syncMenu: "AAAAAgAAABoAAABYAw==",
  options: "AAAAAgAAAJcAAAA2Aw==",
  home: "AAAAAQAAAAEAAABgAw==",
  help: "AAAAAgAAABoAAAB7Aw==",
  return: "AAAAAgAAAJcAAAAjAw==",
  enter: "AAAAAQAAAAEAAABlAw/Aw==",
  exit: "AAAAAQAAAAEAAABjAw==",
  display: "AAAAAQAAAAEAAAA6Aw==",
  wide: "AAAAAgAAAKQAAAA9Aw==",
  threeD: "AAAAAgAAAHcAAABNAw==",
  subtitle: "AAAAAgAAAJcAAAAoAw==",
  0: "AAAAAQAAAAEAAAAJAw==",
  1: "AAAAAQAAAAEAAAAAAw==",
  2: "AAAAAQAAAAEAAAABAw==",
  3: "AAAAAQAAAAEAAAACAw==",
  4: "AAAAAQAAAAEAAAADAw==",
  5: "AAAAAQAAAAEAAAAEAw==",
  6: "AAAAAQAAAAEAAAAFAw==",
  7: "AAAAAQAAAAEAAAAGAw==",
  8: "AAAAAQAAAAEAAAAHAw==",
  9: "AAAAAQAAAAEAAAAIAw==",
  10: "AAAAAgAAAJcAAAAMAw==",
  space: "AAAAAgAAAJcAAAAdAw==",
  red: "AAAAAgAAAJcAAAAlAw==",
  yellow: "AAAAAgAAAJcAAAAnAw==",
  green: "AAAAAgAAAJcAAAAmAw==",
  blue: "AAAAAgAAAJcAAAAkAw==",
  sonyButton: "AAAAAgAAABoAAAB9Aw==",
  pause: "AAAAAgAAAJcAAAAZAw==",
  play: "AAAAAgAAAJcAAAAaAw==",
  stop: "AAAAAgAAAJcAAAAYAw==",
  forward: "AAAAAgAAAJcAAAAcAw==",
  reverse: "AAAAAgAAAJcAAAAbAw==",
  previous: "AAAAAgAAAJcAAAA8Aw==",
  next: "AAAAAgAAAJcAAAA9Aw==",
  fake: "deadbeef"
};

class Remote extends Component {
  constructor(props) {
    super(props);
    this.send = this.send.bind(this);
    this.makeButtons = this.makeButtons.bind(this);
  }

  send(cmd) {
    const IP = "10.0.1.50";
    const url = "http://" + IP + "/sony/IRCC";
    const body = "<?xml version='1.0' encoding='utf-8'?><s:Envelope xmlns:s='http://schemas.xmlsoap.org/soap/envelope/' s:encodingStyle='http://schemas.xmlsoap.org/soap/encoding/'><s:Body><u:X_SendIRCC xmlns:u='urn:schemas-sony-com:service:IRCC:1'><IRCCCode>" + cmd + "</IRCCCode></u:X_SendIRCC></s:Body></s:Envelope>";

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        //console.log(this.responseText);
      }
    });
    xhr.open("POST", url, true);
    xhr.setRequestHeader("content-type", "text/xml");
    xhr.send(body);
  }

  makeButtons(cmds) {
    const keys = Object.keys(cmds);
    return keys.map(key => {return <button onClick={()=>this.send(cmds[key])} key={key}>{key}</button>});
  }

  render() {
    return (
      <div>
        {this.makeButtons(commands)}
      </div>
    );
  }
}

export default Remote;
