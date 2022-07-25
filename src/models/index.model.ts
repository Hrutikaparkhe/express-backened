
function addAssociation(Sequelize) {
    const { User, FamilyInfo, PersonalInfo, DocumentsData }=Sequelize.models
    User.hasMany(FamilyInfo);
    FamilyInfo.belongsTo(User);
  
    User.hasMany(PersonalInfo);
    PersonalInfo.belongsTo(User);
  
    User.hasMany(DocumentsData);
    DocumentsData.belongsTo(User);
  }
  export default addAssociation