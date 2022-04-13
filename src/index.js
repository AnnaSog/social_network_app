import { rerenderEntineTree } from './render';
import state from './state/state';
import { addPost } from './state/state';


rerenderEntineTree(state, addPost);

