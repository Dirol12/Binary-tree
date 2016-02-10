'use strict';

class BinaryTree {

  constructor() {
    this.root = null;
  }

  insert(data) {
    if(!this.root){
      this.root = new Node(data);
      return;
    }

    var currentNode = this.root;

    while(currentNode){
      if(data < currentNode.data){
        if(!currentNode.left){
           currentNode.left = new Node(data);
           break;
        }
        else{
         currentNode = currentNode.left;
        }
     }
       else{
           if(!currentNode.right){
              currentNode.right = new Node(data);
              break;
           }
           else{
              currentNode = currentNode.right;
           }
       }
    }

  }

  find(data) {
    if(!this.root){
      return null;
    }

    var currentNode = this.root;

    while(currentNode){
      if(data == currentNode.data){
        return currentNode;
      }

      if(data < currentNode.data){
        if(!currentNode.left){
           return null;
        }
        else{
         currentNode = currentNode.left;
        }
     }
       else{
           if(!currentNode.right){
              return null;
           }
           else{
              currentNode = currentNode.right;
           }
       }
    }
  }

  contains(data) {
    if(!this.root){
      return false;
    }

    var currentNode = this.root;

    while(currentNode){
      if(data == currentNode.data){
        return true;
      }

      if(data < currentNode.data){
        if(!currentNode.left){
           return false;
        }
        else{
         currentNode = currentNode.left;
        }
     }
       else{
           if(!currentNode.right){
              return false;
           }
           else{
              currentNode = currentNode.right;
           }
       }
    }
  }

  

  remove(data) {
      this.root = this._removeInner(data, this.root);
  }

  _removeInner(data, node) {
      if (node) {
          if (data < node.data) {
              node.left = this._removeInner(data, node.left);
          } else if (data > node.data) {
              node.right = this._removeInner(data, node.right);
          } else if (node.left && node.right) {
              node.data = this.findMinValue(node.right);
              node.right = this._removeInner(node.data, node.right);
          } else {
              node = node.left || node.right;
          }
      }
      return node;
  }
  findMinNode(node) {
        if (!this.isEmpty()) {
            if (node === void 0) node = this.root;
            while (node.left) {
                node = node.left;
            }
            return node;
        }
    }

  findMinValue(node) {
      var minNode = this.findMinNode(node);
      return minNode && minNode.data;
  }

  size() {
    if(this.isEmpty()) return 0;
    var currentNode = this.root;
    return this.countLeaves(currentNode);
  }

  countLeaves(node){
  if( node === null ){
      return 0;
  }

  return 1 + (this.countLeaves(node.left) + this.countLeaves(node.right));

  }


  isEmpty() {
    if(!this.root) {
      return true;
    } 
    return false;
  }
}