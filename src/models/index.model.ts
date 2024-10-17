
function addAssociation(sequelize) {
    const { User, FamilyInfo, PersonalInfo, DocumentsData }=sequelize.models
    User.hasMany(FamilyInfo);
    FamilyInfo.belongsTo(User);
  
    User.hasMany(PersonalInfo);
    PersonalInfo.belongsTo(User);
  
    User.hasMany(DocumentsData);
    DocumentsData.belongsTo(User);
  }
  export default addAssociation