import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'
import CustomHeader from "@/components/customHeader";
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm";
import Ai from '@/components/customMessageForms/Ai';
import AiCode from '@/components/customMessageForms/AiCode';
import AiAssist from '@/components/customMessageForms/AiAssist';

const Chat = ({user, secret}) => {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        user,
        secret
    )

    return <div style={{ flexBasis: "100%" }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps}
            style={{ height: "100vh" }}
            renderChatHeader={(chat) => <CustomHeader chat={chat} /> }
            renderMessageForm={(props) => {
                const messageProps = {
                    props: props,
                    activeChat: chatProps.chat
                }
                if(chatProps.chat?.title.startsWith("AIChat_")) {
                    return( <Ai {...messageProps} />) // Ai chat
                }
                if(chatProps.chat?.title.startsWith("AICode_")) {
                    return( <AiCode {...messageProps} />) // Ai code chat
                }
                if(chatProps.chat?.title.startsWith("AIAssist_")) {
                    return( <AiAssist {...messageProps} />) // Ai code chat
                }
                return (<StandardMessageForm {...messageProps} />) // Standard chat
            }}
        />
    </div>;
};


export default Chat