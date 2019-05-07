'use strict';

var dbm;
var type;
var seed;

/** CLI : db-migrate create table-name
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('student_migrate', {
    id:{type:'int',primaryKey:true},
    name:'string',
    address:'string'
  });
};

exports.down = function(db) {
  return db.dropTable('student_migrate');
};

exports._meta = {
  "version": 1
};
