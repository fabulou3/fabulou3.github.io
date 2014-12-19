function messageGenerator($messages, $nicknames){
  
}

function chatroom ($params){
  this._params = $.extend(this._params, $params);
  this.initEvents();
}
chatroom.prototype = {
  constructor: chatroom,
  _params:{
    sendButton: 'button.sendButton',
    chatroom: '.chatroom',
    messageBox: '<div class="message"></div>',
    textBox: '.textbox',
  },
  initEvents: function(){
    var that = this;
    var onSendMessage = function(){
      var msg = $(that._params.messageBox);
      msg.append($(that._params.textBox).val());
      $(that._params.chatroom).append(msg);
    }
    
    $(this._params.sendButton).on('click', onSendMessage);
  },
};

$(function(){
  //resize
  function resize(){
    // global vars
    var bottomHeight = $('.bottom').height();
    var winHeight = $(window).height() - bottomHeight;
    
    $('.main').css({
      'height': winHeight,
    });
  }
  
  resize();

  // make sure div stays full width/height on resize
  $(window).resize(function(){
      resize();
  });
  
  var objChatroom = new chatroom();
});