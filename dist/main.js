/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_module_1 = __webpack_require__(/*! ./user/user.module */ "./src/user/user.module.ts");
const profession_module_1 = __webpack_require__(/*! ./profession/profession.module */ "./src/profession/profession.module.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const index_entities_1 = __webpack_require__(/*! src/index.entities */ "./src/index.entities.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configModule) => ({
                    type: 'postgres',
                    host: configModule.get('DB_HOST'),
                    port: configModule.get('DB_PORT'),
                    username: configModule.get('DB_USER_NAME'),
                    password: configModule.get('DB_PASSWORD'),
                    database: configModule.get('DB_DATABASE'),
                    synchronize: true,
                    entities: index_entities_1.ENTITIES
                }),
                inject: [config_1.ConfigService]
            }),
            user_module_1.UserModule,
            profession_module_1.ProfessionModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);


/***/ }),

/***/ "./src/index.entities.ts":
/*!*******************************!*\
  !*** ./src/index.entities.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ENTITIES = void 0;
const profession_entity_1 = __webpack_require__(/*! ./profession/entities/profession.entity */ "./src/profession/entities/profession.entity.ts");
__exportStar(__webpack_require__(/*! ./user/user.entity */ "./src/user/user.entity.ts"), exports);
exports.ENTITIES = [profession_entity_1.ProfessionEntity];


/***/ }),

/***/ "./src/profession/commands/create-profession.command.ts":
/*!**************************************************************!*\
  !*** ./src/profession/commands/create-profession.command.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateProfessionCommand = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const profession_entity_1 = __webpack_require__(/*! ../entities/profession.entity */ "./src/profession/entities/profession.entity.ts");
let CreateProfessionCommand = class CreateProfessionCommand {
    constructor(professionRepository) {
        this.professionRepository = professionRepository;
    }
    async execute(createProfessionDto) {
        const profession = this.professionRepository.create(createProfessionDto);
        if (!profession)
            throw new common_1.BadRequestException("Something went wrong");
        await this.professionRepository.save(profession);
        return profession;
    }
};
exports.CreateProfessionCommand = CreateProfessionCommand;
exports.CreateProfessionCommand = CreateProfessionCommand = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profession_entity_1.ProfessionEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CreateProfessionCommand);


/***/ }),

/***/ "./src/profession/commands/delete-profession.command.ts":
/*!**************************************************************!*\
  !*** ./src/profession/commands/delete-profession.command.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteProfessionCommand = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const profession_entity_1 = __webpack_require__(/*! ../entities/profession.entity */ "./src/profession/entities/profession.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
let DeleteProfessionCommand = class DeleteProfessionCommand {
    constructor(professionRepository) {
        this.professionRepository = professionRepository;
    }
    async execute(id) {
        const deletedProfession = await this.professionRepository.findOne({ where: { id } });
        if (!deletedProfession)
            throw new common_1.BadRequestException("This profession is not exist");
        return (await this.professionRepository.delete(id)).affected;
    }
};
exports.DeleteProfessionCommand = DeleteProfessionCommand;
exports.DeleteProfessionCommand = DeleteProfessionCommand = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(profession_entity_1.ProfessionEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], DeleteProfessionCommand);


/***/ }),

/***/ "./src/profession/commands/get-profession-by-id.command.ts":
/*!*****************************************************************!*\
  !*** ./src/profession/commands/get-profession-by-id.command.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetProfessionByIdCommand = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const profession_entity_1 = __webpack_require__(/*! ../entities/profession.entity */ "./src/profession/entities/profession.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let GetProfessionByIdCommand = class GetProfessionByIdCommand {
    constructor(professionRepository) {
        this.professionRepository = professionRepository;
    }
    async execute(id) {
        const profession = await this.professionRepository.findOne({ where: { id } });
        if (!profession)
            throw new common_1.BadRequestException("Something went wrong");
        return profession;
    }
};
exports.GetProfessionByIdCommand = GetProfessionByIdCommand;
exports.GetProfessionByIdCommand = GetProfessionByIdCommand = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profession_entity_1.ProfessionEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], GetProfessionByIdCommand);


/***/ }),

/***/ "./src/profession/commands/get-profession-by-title.command.ts":
/*!********************************************************************!*\
  !*** ./src/profession/commands/get-profession-by-title.command.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetProfessionByTitleCommand = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const profession_entity_1 = __webpack_require__(/*! ../entities/profession.entity */ "./src/profession/entities/profession.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let GetProfessionByTitleCommand = class GetProfessionByTitleCommand {
    constructor(professionRepository) {
        this.professionRepository = professionRepository;
    }
    async execute(profTitle) {
        return await this.professionRepository.find({ where: { title: (0, typeorm_2.Like)('%' + profTitle + '%') } });
    }
};
exports.GetProfessionByTitleCommand = GetProfessionByTitleCommand;
exports.GetProfessionByTitleCommand = GetProfessionByTitleCommand = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profession_entity_1.ProfessionEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], GetProfessionByTitleCommand);


/***/ }),

/***/ "./src/profession/commands/index.ts":
/*!******************************************!*\
  !*** ./src/profession/commands/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PROFESSIONS_COMMANDS = void 0;
const create_profession_command_1 = __webpack_require__(/*! ./create-profession.command */ "./src/profession/commands/create-profession.command.ts");
const delete_profession_command_1 = __webpack_require__(/*! ./delete-profession.command */ "./src/profession/commands/delete-profession.command.ts");
const get_profession_by_id_command_1 = __webpack_require__(/*! ./get-profession-by-id.command */ "./src/profession/commands/get-profession-by-id.command.ts");
const get_profession_by_title_command_1 = __webpack_require__(/*! ./get-profession-by-title.command */ "./src/profession/commands/get-profession-by-title.command.ts");
const update_profession_command_1 = __webpack_require__(/*! ./update-profession.command */ "./src/profession/commands/update-profession.command.ts");
__exportStar(__webpack_require__(/*! ./create-profession.command */ "./src/profession/commands/create-profession.command.ts"), exports);
exports.PROFESSIONS_COMMANDS = [
    get_profession_by_id_command_1.GetProfessionByIdCommand,
    get_profession_by_title_command_1.GetProfessionByTitleCommand,
    create_profession_command_1.CreateProfessionCommand,
    update_profession_command_1.UpdateProfessionCommand,
    delete_profession_command_1.DeleteProfessionCommand
];


/***/ }),

/***/ "./src/profession/commands/update-profession.command.ts":
/*!**************************************************************!*\
  !*** ./src/profession/commands/update-profession.command.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProfessionCommand = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const profession_entity_1 = __webpack_require__(/*! ../entities/profession.entity */ "./src/profession/entities/profession.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let UpdateProfessionCommand = class UpdateProfessionCommand {
    constructor(professionRepository) {
        this.professionRepository = professionRepository;
    }
    async execute(id, updatedProfessionDto) {
        const findedProfession = await this.professionRepository.findOne({ where: { id } });
        if (!findedProfession || !updatedProfessionDto)
            throw new common_1.BadRequestException("Something went wrong with update profession");
        return (await this.professionRepository.update(id, updatedProfessionDto)).affected;
    }
};
exports.UpdateProfessionCommand = UpdateProfessionCommand;
exports.UpdateProfessionCommand = UpdateProfessionCommand = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profession_entity_1.ProfessionEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UpdateProfessionCommand);


/***/ }),

/***/ "./src/profession/decorators/custom-profession.decorator.ts":
/*!******************************************************************!*\
  !*** ./src/profession/decorators/custom-profession.decorator.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteDecorator = exports.UpdateDecoratorByID = exports.GetDecoratorByID = exports.GetDecoratorByTitle = exports.CreateDecorator = exports.GerALLDecorator = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
function GerALLDecorator() {
    return (0, common_2.applyDecorators)((0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({ summary: "Get all professions" }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: "Something went wrong 500 error"
    }));
}
exports.GerALLDecorator = GerALLDecorator;
function CreateDecorator() {
    return (0, common_2.applyDecorators)((0, common_1.HttpCode)(common_1.HttpStatus.CREATED), (0, swagger_1.ApiOperation)({ summary: "Create profession" }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: "Description",
        schema: {
            example: {
                title: "Backend developer",
                description: "Work with Databases",
                skills: ["62c2b0c3-4d8b-482b-92f0-65b3e262716b", "62c2b0c3-4d8b-482b-92f0-65b3e262716b"],
                image_src: "",
                keywords: ["Development", "Web developer"]
            }
        }
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Invalid input data',
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: "You're not authorized"
    }));
}
exports.CreateDecorator = CreateDecorator;
;
function GetDecoratorByTitle() {
    return (0, common_2.applyDecorators)((0, swagger_1.ApiOperation)({ summary: "Get professions by title" }), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: "Description",
        schema: {
            example: [
                {
                    title: "Backend developer",
                    description: "Work with Databases",
                    skills: ["62c2b0c3-4d8b-482b-92f0-65b3e262716b", "62c2b0c3-4d8b-482b-92f0-65b3e262716b"],
                    image_src: "",
                    keywords: ["Development", "Web developer"]
                }
            ]
        }
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: "Invalid input data"
    }));
}
exports.GetDecoratorByTitle = GetDecoratorByTitle;
;
function GetDecoratorByID() {
    return (0, common_2.applyDecorators)((0, common_1.HttpCode)(common_1.HttpStatus.ACCEPTED), (0, swagger_1.ApiOperation)({ summary: "Get profession by id" }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.ACCEPTED,
        description: "Description",
        schema: {
            example: {
                title: "Backend developer",
                description: "Work with Databases",
                skills: ["62c2b0c3-4d8b-482b-92f0-65b3e262716b", "62c2b0c3-4d8b-482b-92f0-65b3e262716b"],
                image_src: "",
                keywords: ["Development", "Web developer"]
            }
        }
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: "Bad Request"
    }));
}
exports.GetDecoratorByID = GetDecoratorByID;
;
function UpdateDecoratorByID() {
    return (0, common_2.applyDecorators)((0, swagger_1.ApiOperation)({ summary: "Update profession via id" }), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: "Description",
        schema: {
            example: {
                title: "Backend developer",
                description: "Work with Databases",
                skills: ["62c2b0c3-4d8b-482b-92f0-65b3e262716b"],
                image_src: "",
                keywords: ["Some keywords..."]
            }
        }
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: "Invalid input data"
    }));
}
exports.UpdateDecoratorByID = UpdateDecoratorByID;
;
function DeleteDecorator() {
    return (0, common_2.applyDecorators)((0, swagger_1.ApiOperation)({ summary: "Delete profession via id" }), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: "Invalid id"
    }));
}
exports.DeleteDecorator = DeleteDecorator;
;


/***/ }),

/***/ "./src/profession/dto/create-profession.dto.ts":
/*!*****************************************************!*\
  !*** ./src/profession/dto/create-profession.dto.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateProfessionDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateProfessionDto {
}
exports.CreateProfessionDto = CreateProfessionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Backend developer",
        description: "Profession name",
        required: true
    }),
    (0, class_validator_1.Length)(1, 255),
    __metadata("design:type", String)
], CreateProfessionDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Work with TypeOrm, Nest.js ...",
        description: "What did you do in this job",
        required: true
    }),
    (0, class_validator_1.Length)(1, 255),
    __metadata("design:type", String)
], CreateProfessionDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ["62c2b0c3-4d8b-482b-92f0-65b3e262716b"],
        description: "Skill's id",
        required: true
    }),
    (0, class_validator_1.IsUUID)('4'),
    __metadata("design:type", Array)
], CreateProfessionDto.prototype, "skills", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "https://media.geeksforgeeks.org/wp-content/uploads/20190506164011/logo3.png",
        description: "Image src",
        required: true
    }),
    (0, class_validator_1.Length)(1, 255),
    __metadata("design:type", String)
], CreateProfessionDto.prototype, "image_src", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ["Comunicated", "Some keyword"],
        description: "Personal skills",
        required: true
    }),
    __metadata("design:type", Array)
], CreateProfessionDto.prototype, "keywords", void 0);


/***/ }),

/***/ "./src/profession/dto/update-profession.dto.ts":
/*!*****************************************************!*\
  !*** ./src/profession/dto/update-profession.dto.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProfessionDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const create_profession_dto_1 = __webpack_require__(/*! ./create-profession.dto */ "./src/profession/dto/create-profession.dto.ts");
class UpdateProfessionDto extends (0, swagger_1.PartialType)(create_profession_dto_1.CreateProfessionDto) {
}
exports.UpdateProfessionDto = UpdateProfessionDto;


/***/ }),

/***/ "./src/profession/entities/profession.entity.ts":
/*!******************************************************!*\
  !*** ./src/profession/entities/profession.entity.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfessionEntity = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let ProfessionEntity = class ProfessionEntity {
};
exports.ProfessionEntity = ProfessionEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, class_validator_1.IsUUID)('4'),
    __metadata("design:type", String)
], ProfessionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    (0, class_validator_1.Length)(1, 255),
    __metadata("design:type", String)
], ProfessionEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: false }),
    (0, class_validator_1.Length)(1, 255),
    __metadata("design:type", String)
], ProfessionEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", array: true }),
    (0, class_validator_1.IsUUID)('4'),
    __metadata("design:type", Array)
], ProfessionEntity.prototype, "skills", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: false }),
    (0, class_validator_1.Length)(1, 255),
    __metadata("design:type", String)
], ProfessionEntity.prototype, "image_src", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", array: true }),
    __metadata("design:type", Array)
], ProfessionEntity.prototype, "keywords", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], ProfessionEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at" }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], ProfessionEntity.prototype, "updatedAt", void 0);
exports.ProfessionEntity = ProfessionEntity = __decorate([
    (0, typeorm_1.Entity)('professions')
], ProfessionEntity);


/***/ }),

/***/ "./src/profession/profession.controller.ts":
/*!*************************************************!*\
  !*** ./src/profession/profession.controller.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfessionController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const profession_service_1 = __webpack_require__(/*! ./profession.service */ "./src/profession/profession.service.ts");
const create_profession_dto_1 = __webpack_require__(/*! ./dto/create-profession.dto */ "./src/profession/dto/create-profession.dto.ts");
const update_profession_dto_1 = __webpack_require__(/*! ./dto/update-profession.dto */ "./src/profession/dto/update-profession.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const custom_profession_decorator_1 = __webpack_require__(/*! ./decorators/custom-profession.decorator */ "./src/profession/decorators/custom-profession.decorator.ts");
let ProfessionController = class ProfessionController {
    constructor(professionService) {
        this.professionService = professionService;
    }
    async getAllProfessions() {
        return await this.professionService.getAllProfessions();
    }
    async getProfessionByTitle(profTitle) {
        try {
            return await this.professionService.getProfessionByTitle(profTitle);
        }
        catch (error) {
            throw new Error(error);
        }
        ;
    }
    async getProfessionById(id) {
        try {
            return await this.professionService.getProfessionById(id);
        }
        catch (error) {
            throw new Error(error);
        }
        ;
    }
    async createProfession(createProfessionDto) {
        try {
            return await this.professionService.createProfession(createProfessionDto);
        }
        catch (error) {
            throw new Error(error);
        }
        ;
    }
    async updateProfession(id, updateProfessionDto) {
        try {
            return await this.professionService.updateProfession(id, updateProfessionDto);
        }
        catch (error) {
            throw new Error(error);
        }
        ;
    }
    async removeProfession(id) {
        try {
            return await this.professionService.removeProfession(id);
        }
        catch (error) {
            throw new Error(error);
        }
        ;
    }
};
exports.ProfessionController = ProfessionController;
__decorate([
    (0, common_1.Get)(),
    (0, custom_profession_decorator_1.GerALLDecorator)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProfessionController.prototype, "getAllProfessions", null);
__decorate([
    (0, common_1.Get)("profession"),
    (0, custom_profession_decorator_1.GetDecoratorByTitle)(),
    __param(0, (0, common_1.Query)("prof_title")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ProfessionController.prototype, "getProfessionByTitle", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, custom_profession_decorator_1.GetDecoratorByID)(),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ProfessionController.prototype, "getProfessionById", null);
__decorate([
    (0, common_1.Post)(),
    (0, custom_profession_decorator_1.CreateDecorator)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof create_profession_dto_1.CreateProfessionDto !== "undefined" && create_profession_dto_1.CreateProfessionDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ProfessionController.prototype, "createProfession", null);
__decorate([
    (0, common_1.Put)(":id"),
    (0, custom_profession_decorator_1.UpdateDecoratorByID)(),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_f = typeof update_profession_dto_1.UpdateProfessionDto !== "undefined" && update_profession_dto_1.UpdateProfessionDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ProfessionController.prototype, "updateProfession", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, custom_profession_decorator_1.DeleteDecorator)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], ProfessionController.prototype, "removeProfession", null);
exports.ProfessionController = ProfessionController = __decorate([
    (0, swagger_1.ApiTags)("professions"),
    (0, common_1.Controller)("professions"),
    __metadata("design:paramtypes", [typeof (_a = typeof profession_service_1.ProfessionService !== "undefined" && profession_service_1.ProfessionService) === "function" ? _a : Object])
], ProfessionController);


/***/ }),

/***/ "./src/profession/profession.module.ts":
/*!*********************************************!*\
  !*** ./src/profession/profession.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfessionModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const profession_service_1 = __webpack_require__(/*! ./profession.service */ "./src/profession/profession.service.ts");
const profession_controller_1 = __webpack_require__(/*! ./profession.controller */ "./src/profession/profession.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const profession_entity_1 = __webpack_require__(/*! ./entities/profession.entity */ "./src/profession/entities/profession.entity.ts");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/profession/commands/index.ts");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/profession/queries/index.ts");
let ProfessionModule = class ProfessionModule {
};
exports.ProfessionModule = ProfessionModule;
exports.ProfessionModule = ProfessionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([profession_entity_1.ProfessionEntity])],
        controllers: [profession_controller_1.ProfessionController],
        providers: [profession_service_1.ProfessionService, ...commands_1.PROFESSIONS_COMMANDS, ...queries_1.PROFESSIONS_QUERY],
        exports: [typeorm_1.TypeOrmModule, profession_service_1.ProfessionService]
    })
], ProfessionModule);


/***/ }),

/***/ "./src/profession/profession.service.ts":
/*!**********************************************!*\
  !*** ./src/profession/profession.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfessionService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/profession/queries/index.ts");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/profession/commands/index.ts");
const update_profession_command_1 = __webpack_require__(/*! ./commands/update-profession.command */ "./src/profession/commands/update-profession.command.ts");
const delete_profession_command_1 = __webpack_require__(/*! ./commands/delete-profession.command */ "./src/profession/commands/delete-profession.command.ts");
const get_profession_by_title_command_1 = __webpack_require__(/*! ./commands/get-profession-by-title.command */ "./src/profession/commands/get-profession-by-title.command.ts");
const get_profession_by_id_command_1 = __webpack_require__(/*! ./commands/get-profession-by-id.command */ "./src/profession/commands/get-profession-by-id.command.ts");
let ProfessionService = class ProfessionService {
    constructor(getProfessionCommand, getProfessionByTitleCommand, getProfessionByIdCommand, createProfessionCommand, updateProfessionCommand, deleteProfessionCommand) {
        this.getProfessionCommand = getProfessionCommand;
        this.getProfessionByTitleCommand = getProfessionByTitleCommand;
        this.getProfessionByIdCommand = getProfessionByIdCommand;
        this.createProfessionCommand = createProfessionCommand;
        this.updateProfessionCommand = updateProfessionCommand;
        this.deleteProfessionCommand = deleteProfessionCommand;
    }
    async createProfession(createProfessionDto) {
        const { title, description, skills, image_src, keywords } = createProfessionDto;
        const newProfession = {
            title,
            description,
            skills,
            image_src,
            keywords
        };
        if (!newProfession || createProfessionDto === null)
            throw new common_1.BadRequestException("Something went wrong in create Profession...");
        return await this.createProfessionCommand.execute(newProfession);
    }
    async getAllProfessions() {
        return await this.getProfessionCommand.execute();
    }
    async getProfessionById(id) {
        return await this.getProfessionByIdCommand.execute(id);
    }
    async getProfessionByTitle(profTitle) {
        return await this.getProfessionByTitleCommand.execute(profTitle);
    }
    async updateProfession(id, updateProfessionDto) {
        return await this.updateProfessionCommand.execute(id, updateProfessionDto);
    }
    async removeProfession(id) {
        return await this.deleteProfessionCommand.execute(id);
    }
};
exports.ProfessionService = ProfessionService;
exports.ProfessionService = ProfessionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof queries_1.GetProfessionsQuery !== "undefined" && queries_1.GetProfessionsQuery) === "function" ? _a : Object, typeof (_b = typeof get_profession_by_title_command_1.GetProfessionByTitleCommand !== "undefined" && get_profession_by_title_command_1.GetProfessionByTitleCommand) === "function" ? _b : Object, typeof (_c = typeof get_profession_by_id_command_1.GetProfessionByIdCommand !== "undefined" && get_profession_by_id_command_1.GetProfessionByIdCommand) === "function" ? _c : Object, typeof (_d = typeof commands_1.CreateProfessionCommand !== "undefined" && commands_1.CreateProfessionCommand) === "function" ? _d : Object, typeof (_e = typeof update_profession_command_1.UpdateProfessionCommand !== "undefined" && update_profession_command_1.UpdateProfessionCommand) === "function" ? _e : Object, typeof (_f = typeof delete_profession_command_1.DeleteProfessionCommand !== "undefined" && delete_profession_command_1.DeleteProfessionCommand) === "function" ? _f : Object])
], ProfessionService);


/***/ }),

/***/ "./src/profession/queries/get-professions.query.ts":
/*!*********************************************************!*\
  !*** ./src/profession/queries/get-professions.query.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetProfessionsQuery = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const profession_entity_1 = __webpack_require__(/*! ../entities/profession.entity */ "./src/profession/entities/profession.entity.ts");
let GetProfessionsQuery = class GetProfessionsQuery {
    constructor(professionRepository) {
        this.professionRepository = professionRepository;
    }
    async execute() {
        return await this.professionRepository.find();
    }
};
exports.GetProfessionsQuery = GetProfessionsQuery;
exports.GetProfessionsQuery = GetProfessionsQuery = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profession_entity_1.ProfessionEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], GetProfessionsQuery);
;


/***/ }),

/***/ "./src/profession/queries/index.ts":
/*!*****************************************!*\
  !*** ./src/profession/queries/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PROFESSIONS_QUERY = void 0;
const get_professions_query_1 = __webpack_require__(/*! ./get-professions.query */ "./src/profession/queries/get-professions.query.ts");
__exportStar(__webpack_require__(/*! ./get-professions.query */ "./src/profession/queries/get-professions.query.ts"), exports);
exports.PROFESSIONS_QUERY = [get_professions_query_1.GetProfessionsQuery];


/***/ }),

/***/ "./src/user/commands/create-user.command.ts":
/*!**************************************************!*\
  !*** ./src/user/commands/create-user.command.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserCommand = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ../user.entity */ "./src/user/user.entity.ts");
let CreateUserCommand = class CreateUserCommand {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(createUserDto) {
        const user = this.usersRepository.create(createUserDto);
        await this.usersRepository.save(user);
        return user;
    }
};
exports.CreateUserCommand = CreateUserCommand;
exports.CreateUserCommand = CreateUserCommand = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CreateUserCommand);


/***/ }),

/***/ "./src/user/commands/index.ts":
/*!************************************!*\
  !*** ./src/user/commands/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.USERS_COMMANDS = void 0;
const create_user_command_1 = __webpack_require__(/*! ./create-user.command */ "./src/user/commands/create-user.command.ts");
__exportStar(__webpack_require__(/*! ./create-user.command */ "./src/user/commands/create-user.command.ts"), exports);
exports.USERS_COMMANDS = [create_user_command_1.CreateUserCommand];


/***/ }),

/***/ "./src/user/dto/index.ts":
/*!*******************************!*\
  !*** ./src/user/dto/index.ts ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./src/user/queries/get-users.query.ts":
/*!*********************************************!*\
  !*** ./src/user/queries/get-users.query.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetUsersQuery = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ../user.entity */ "./src/user/user.entity.ts");
let GetUsersQuery = class GetUsersQuery {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute() {
        return await this.usersRepository.find();
    }
};
exports.GetUsersQuery = GetUsersQuery;
exports.GetUsersQuery = GetUsersQuery = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], GetUsersQuery);


/***/ }),

/***/ "./src/user/queries/index.ts":
/*!***********************************!*\
  !*** ./src/user/queries/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.USERS_QUERIES = void 0;
const get_users_query_1 = __webpack_require__(/*! ./get-users.query */ "./src/user/queries/get-users.query.ts");
__exportStar(__webpack_require__(/*! ./get-users.query */ "./src/user/queries/get-users.query.ts"), exports);
exports.USERS_QUERIES = [get_users_query_1.GetUsersQuery];


/***/ }),

/***/ "./src/user/user.controller.ts":
/*!*************************************!*\
  !*** ./src/user/user.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./src/user/user.service.ts");
const dto_1 = __webpack_require__(/*! ./dto */ "./src/user/dto/index.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async findAll() {
        return this.userService.findAll();
    }
    create(userDto) {
        return this.userService.create(userDto);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new user' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'The user has been successfully created.',
        schema: {
            example: {
                firstName: 'John',
                lastName: 'Doe',
                passwordHash: 'hashed_password_example',
                phone: '+1234567890',
                email: 'john.doe@example.com',
                country: 'USA',
                city: 'New York',
                birthday: '1990-01-01',
                address: '123 Main St',
                avatarUrl: 'http://example.com/avatar.jpg',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Invalid input data',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CONFLICT,
        description: 'Email already exists',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.CreateUserDto !== "undefined" && dto_1.CreateUserDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);


/***/ }),

/***/ "./src/user/user.entity.ts":
/*!*********************************!*\
  !*** ./src/user/user.entity.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
let UserEntity = class UserEntity {
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, class_validator_1.IsUUID)('4'),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, name: 'first_name' }),
    (0, class_validator_1.Length)(1, 255),
    __metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, name: 'last_name' }),
    (0, class_validator_1.Length)(1, 255),
    __metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, name: 'password_hash' }),
    (0, class_validator_1.Length)(1, 255),
    __metadata("design:type", String)
], UserEntity.prototype, "passwordHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    (0, class_validator_1.Length)(1, 255),
    __metadata("design:type", String)
], UserEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, class_validator_1.Length)(1, 255),
    __metadata("design:type", String)
], UserEntity.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, class_validator_1.Length)(1, 255),
    __metadata("design:type", String)
], UserEntity.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, unique: true }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', nullable: true }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserEntity.prototype, "birthday", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    (0, class_validator_1.Length)(1, 255),
    __metadata("design:type", String)
], UserEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], UserEntity.prototype, "avatarUrl", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UserEntity.prototype, "updatedAt", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)('users'),
    (0, typeorm_1.Unique)(['email', 'phone'])
], UserEntity);


/***/ }),

/***/ "./src/user/user.module.ts":
/*!*********************************!*\
  !*** ./src/user/user.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./src/user/user.service.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_controller_1 = __webpack_require__(/*! ./user.controller */ "./src/user/user.controller.ts");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/user/commands/index.ts");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/user/queries/index.ts");
const user_entity_1 = __webpack_require__(/*! ./user.entity */ "./src/user/user.entity.ts");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity])],
        providers: [user_service_1.UserService, ...commands_1.USERS_COMMANDS, ...queries_1.USERS_QUERIES],
        controllers: [user_controller_1.UserController],
        exports: [typeorm_1.TypeOrmModule, user_service_1.UserService],
    })
], UserModule);


/***/ }),

/***/ "./src/user/user.service.ts":
/*!**********************************!*\
  !*** ./src/user/user.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/user/commands/index.ts");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/user/queries/index.ts");
let UserService = class UserService {
    constructor(createUserCommand, getUsersQuery) {
        this.createUserCommand = createUserCommand;
        this.getUsersQuery = getUsersQuery;
    }
    findAll() {
        return this.getUsersQuery.execute();
    }
    create(userDto) {
        return this.createUserCommand.execute(userDto);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof commands_1.CreateUserCommand !== "undefined" && commands_1.CreateUserCommand) === "function" ? _a : Object, typeof (_b = typeof queries_1.GetUsersQuery !== "undefined" && queries_1.GetUsersQuery) === "function" ? _b : Object])
], UserService);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("class-validator");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("typeorm");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Example app')
        .setDescription('The app API description')
        .setVersion('1.0')
        .addTag('app')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;