import React, { useEffect, useState } from 'react'
import { usePostAiAssistMutation } from '@/state/api';
import MessageFormUI from './MessageFormUI';


const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

const AiAssist = ({ props, activeChat }) => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [trigger, resultAssist] = usePostAiAssistMutation();
  const [appendText, setAppendText] = useState("");

  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
    const at = attachment ? [{ blob: attachment, file: attachment.name }] : [];
    const form = {
      attachments: at,
      created: date,
      sender_username: props.username,
      text: message,
      activeChatId: activeChat.id,
    };

    props.onSubmit(form);
    setMessage("");
    setAttachment("");
  };

  const debouncedValue = useDebounce(message, 1000);

  useEffect(() => {
    if (debouncedValue) {
      const form = {text: message}
      trigger(form);
    }
  }, [debouncedValue]); //eslint-disable-line

 const handlerKeyDown = (e) => {
  // if key tab is pressed append text
    if (e.key === "Tab") {
      e.preventDefault();
      setMessage(`${message} ${appendText}`);
      setAppendText("");
    }
    //if key enter is pressed submit form
    if (e.key === "Enter") {
      e.preventDefault();
      setAppendText("");
      handleSubmit();
    }
  };

  useEffect(() => {
    if (resultAssist.data?.text) {
      setAppendText(resultAssist.data.text);
    }
  }, [resultAssist.data?.text]); //eslint-disable-line



  return (
    <MessageFormUI
      setAttachment={setAttachment}
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      appendText={appendText}
      handlerKeyDown={handlerKeyDown}
    />
  )
}


export default AiAssist;
