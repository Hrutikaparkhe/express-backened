import { User } from "./user.model";
import { FamilyData } from "./familyData.model";
import { PersonalData } from "./personalData.model";
import { DocumentsData } from "./documents.model";

// function addAssociations(sequelize) {
//     const { user, conversation, message, userToConversation } = sequelize.models;
  
//     user.hasMany(userToConversation);
//     userToConversation.belongsTo(user);
  
//     conversation.hasMany(userToConversation);
//     userToConversation.belongsTo(conversation);
  
//     conversation.hasMany(message);
//     message.belongsTo(conversation);
  
//     user.hasMany(message);
//     message.belongsTo(user);
//   }
  
//   module.exports = { addAssociations};
function addAssocuation(sequelize){
    const {User ,FamilyData ,PersonalData,DocumentsData} = sequelize.models;
    User.hasMany(FamilyData);
    FamilyData.belongsTo(User)
}