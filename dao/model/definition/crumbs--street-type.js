'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsStreettype', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        code: {
            type: DataTypes.STRING(10),
            field: 'Code',
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50),
            field: 'Name',
            allowNull: false
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: true
        },
        v8ID: {
            type: DataTypes.INTEGER,
            field: 'V8ID',
            allowNull: true
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        tontoID: {
            type: DataTypes.INTEGER,
            field: 'TontoID',
            allowNull: true
        },
        retailID: {
            type: DataTypes.INTEGER,
            field: 'RetailID',
            allowNull: true
        },
        vedaCode: {
            type: DataTypes.STRING(10),
            field: 'VedaCode',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_StreetType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsStreettype = model.CrumbsStreettype;

};
