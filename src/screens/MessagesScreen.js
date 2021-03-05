import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { Screen, ListItem, ListItemSeparator, ListItemDeleteActions } from '../components';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
]

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter(({ id }) => message.id !== id));
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item: message }) => (
          <ListItem
            title={message.title}
            subTitle={message.description}
            image={message.image}
            onPress={() => console.log('Message selected', message)}
            rightActions={() => (
              <ListItemDeleteActions onPress={() => handleDelete(message)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages(initialMessages)}
      />
    </Screen>
  );
}

export default MessagesScreen;