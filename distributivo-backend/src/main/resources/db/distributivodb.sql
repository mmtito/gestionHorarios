PGDMP     7                    {            distributivodb     15.1 (Ubuntu 15.1-1.pgdg22.04+1)     15.1 (Ubuntu 15.1-1.pgdg22.04+1) �    M           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            N           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            O           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            P           1262    16387    distributivodb    DATABASE     z   CREATE DATABASE distributivodb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';
    DROP DATABASE distributivodb;
                postgres    false                        2615    16388    auth    SCHEMA        CREATE SCHEMA auth;
    DROP SCHEMA auth;
                postgres    false            �            1259    16389    authorities    TABLE     a   CREATE TABLE auth.authorities (
    authority_id integer NOT NULL,
    name character varying
);
    DROP TABLE auth.authorities;
       auth         heap    postgres    false    6            �            1259    16394    authorities_authority_id_seq    SEQUENCE     �   CREATE SEQUENCE auth.authorities_authority_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 1   DROP SEQUENCE auth.authorities_authority_id_seq;
       auth          postgres    false    6            �            1259    16395    authorities_authority_id_seq1    SEQUENCE     �   CREATE SEQUENCE auth.authorities_authority_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE auth.authorities_authority_id_seq1;
       auth          postgres    false    6    215            Q           0    0    authorities_authority_id_seq1    SEQUENCE OWNED BY     Z   ALTER SEQUENCE auth.authorities_authority_id_seq1 OWNED BY auth.authorities.authority_id;
          auth          postgres    false    217            �            1259    16396    roles    TABLE     V   CREATE TABLE auth.roles (
    role_id integer NOT NULL,
    name character varying
);
    DROP TABLE auth.roles;
       auth         heap    postgres    false    6            �            1259    16401    roles_authorities    TABLE        CREATE TABLE auth.roles_authorities (
    role_authority_id integer NOT NULL,
    role_id integer,
    authority_id integer
);
 #   DROP TABLE auth.roles_authorities;
       auth         heap    postgres    false    6            �            1259    16404 '   roles_authorities_role_authority_id_seq    SEQUENCE     �   CREATE SEQUENCE auth.roles_authorities_role_authority_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 <   DROP SEQUENCE auth.roles_authorities_role_authority_id_seq;
       auth          postgres    false    6            �            1259    16405 (   roles_authorities_role_authority_id_seq1    SEQUENCE     �   CREATE SEQUENCE auth.roles_authorities_role_authority_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 =   DROP SEQUENCE auth.roles_authorities_role_authority_id_seq1;
       auth          postgres    false    6    219            R           0    0 (   roles_authorities_role_authority_id_seq1    SEQUENCE OWNED BY     p   ALTER SEQUENCE auth.roles_authorities_role_authority_id_seq1 OWNED BY auth.roles_authorities.role_authority_id;
          auth          postgres    false    221            �            1259    16406    roles_role_id_seq    SEQUENCE     �   CREATE SEQUENCE auth.roles_role_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 &   DROP SEQUENCE auth.roles_role_id_seq;
       auth          postgres    false    6            �            1259    16407    roles_role_id_seq1    SEQUENCE     �   CREATE SEQUENCE auth.roles_role_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE auth.roles_role_id_seq1;
       auth          postgres    false    6    218            S           0    0    roles_role_id_seq1    SEQUENCE OWNED BY     D   ALTER SEQUENCE auth.roles_role_id_seq1 OWNED BY auth.roles.role_id;
          auth          postgres    false    223            �            1259    16408    users    TABLE     �   CREATE TABLE auth.users (
    user_id integer NOT NULL,
    password character varying,
    name character varying,
    username character varying,
    looked boolean,
    expired boolean,
    enabled boolean
);
    DROP TABLE auth.users;
       auth         heap    postgres    false    6            �            1259    16413    users_roles    TABLE     o   CREATE TABLE auth.users_roles (
    user_role_id integer NOT NULL,
    user_id integer,
    role_id integer
);
    DROP TABLE auth.users_roles;
       auth         heap    postgres    false    6            �            1259    16416    users_roles_user_role_id_seq    SEQUENCE     �   CREATE SEQUENCE auth.users_roles_user_role_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 1   DROP SEQUENCE auth.users_roles_user_role_id_seq;
       auth          postgres    false    6            �            1259    16417    users_roles_user_role_id_seq1    SEQUENCE     �   CREATE SEQUENCE auth.users_roles_user_role_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE auth.users_roles_user_role_id_seq1;
       auth          postgres    false    225    6            T           0    0    users_roles_user_role_id_seq1    SEQUENCE OWNED BY     Z   ALTER SEQUENCE auth.users_roles_user_role_id_seq1 OWNED BY auth.users_roles.user_role_id;
          auth          postgres    false    227            �            1259    16418    users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE auth.users_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 &   DROP SEQUENCE auth.users_user_id_seq;
       auth          postgres    false    6            �            1259    16419    users_user_id_seq1    SEQUENCE     �   CREATE SEQUENCE auth.users_user_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE auth.users_user_id_seq1;
       auth          postgres    false    6    224            U           0    0    users_user_id_seq1    SEQUENCE OWNED BY     D   ALTER SEQUENCE auth.users_user_id_seq1 OWNED BY auth.users.user_id;
          auth          postgres    false    229            �            1259    16420    Asignatura_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Asignatura_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 *   DROP SEQUENCE public."Asignatura_id_seq";
       public          postgres    false            �            1259    16421    caerer_id_seq    SEQUENCE     ~   CREATE SEQUENCE public.caerer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 $   DROP SEQUENCE public.caerer_id_seq;
       public          postgres    false            �            1259    16422    career    TABLE     �   CREATE TABLE public.career (
    id integer NOT NULL,
    name character varying(100),
    duration integer,
    img text,
    status boolean,
    code character varying(100)
);
    DROP TABLE public.career;
       public         heap    postgres    false            �            1259    16427    career_id_seq    SEQUENCE     �   CREATE SEQUENCE public.career_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.career_id_seq;
       public          postgres    false    232            V           0    0    career_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.career_id_seq OWNED BY public.career.id;
          public          postgres    false    233            �            1259    16428 	   catalogue    TABLE     �   CREATE TABLE public.catalogue (
    id integer NOT NULL,
    name character varying(50),
    value character varying(50),
    status boolean
);
    DROP TABLE public.catalogue;
       public         heap    postgres    false            �            1259    16431    catalogue_id_seq    SEQUENCE     �   CREATE SEQUENCE public.catalogue_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.catalogue_id_seq;
       public          postgres    false    234            W           0    0    catalogue_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.catalogue_id_seq OWNED BY public.catalogue.id;
          public          postgres    false    235            �            1259    16432    classroom_types    TABLE     �   CREATE TABLE public.classroom_types (
    id integer NOT NULL,
    code character varying(20),
    name character varying(100),
    status boolean DEFAULT true
);
 #   DROP TABLE public.classroom_types;
       public         heap    postgres    false            �            1259    16436    classroom_types_id_seq    SEQUENCE     �   CREATE SEQUENCE public.classroom_types_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 -   DROP SEQUENCE public.classroom_types_id_seq;
       public          postgres    false            �            1259    16437    classroom_types_id_seq1    SEQUENCE     �   CREATE SEQUENCE public.classroom_types_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.classroom_types_id_seq1;
       public          postgres    false    236            X           0    0    classroom_types_id_seq1    SEQUENCE OWNED BY     R   ALTER SEQUENCE public.classroom_types_id_seq1 OWNED BY public.classroom_types.id;
          public          postgres    false    238            �            1259    16438 
   classrooms    TABLE     �   CREATE TABLE public.classrooms (
    id integer NOT NULL,
    type integer,
    location integer,
    name character varying(100),
    capacity integer,
    status boolean DEFAULT true,
    description text,
    code character varying(100)
);
    DROP TABLE public.classrooms;
       public         heap    postgres    false            �            1259    16444    classrooms_id_seq    SEQUENCE     �   CREATE SEQUENCE public.classrooms_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 (   DROP SEQUENCE public.classrooms_id_seq;
       public          postgres    false            �            1259    16445    classrooms_id_seq1    SEQUENCE     �   CREATE SEQUENCE public.classrooms_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.classrooms_id_seq1;
       public          postgres    false    239            Y           0    0    classrooms_id_seq1    SEQUENCE OWNED BY     H   ALTER SEQUENCE public.classrooms_id_seq1 OWNED BY public.classrooms.id;
          public          postgres    false    241            �            1259    16446    color_id_seq    SEQUENCE     }   CREATE SEQUENCE public.color_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 #   DROP SEQUENCE public.color_id_seq;
       public          postgres    false            �            1259    16447    configuracion_horario_id_seq    SEQUENCE     �   CREATE SEQUENCE public.configuracion_horario_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 3   DROP SEQUENCE public.configuracion_horario_id_seq;
       public          postgres    false            �            1259    16448    day    TABLE     k   CREATE TABLE public.day (
    id integer NOT NULL,
    name character varying(20),
    posicion integer
);
    DROP TABLE public.day;
       public         heap    postgres    false            �            1259    16451 
   day_id_seq    SEQUENCE     �   CREATE SEQUENCE public.day_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 !   DROP SEQUENCE public.day_id_seq;
       public          postgres    false    244            Z           0    0 
   day_id_seq    SEQUENCE OWNED BY     9   ALTER SEQUENCE public.day_id_seq OWNED BY public.day.id;
          public          postgres    false    245            �            1259    16452 
   dia_id_seq    SEQUENCE     {   CREATE SEQUENCE public.dia_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 !   DROP SEQUENCE public.dia_id_seq;
       public          postgres    false            �            1259    16453    grade    TABLE     �   CREATE TABLE public.grade (
    id integer NOT NULL,
    name character varying(100),
    working_day integer,
    level integer,
    parallel integer,
    status boolean DEFAULT true,
    career integer
);
    DROP TABLE public.grade;
       public         heap    postgres    false            �            1259    16457    school_period    TABLE     �   CREATE TABLE public.school_period (
    id integer NOT NULL,
    name character varying(100),
    start_date date,
    end_date date,
    status boolean
);
 !   DROP TABLE public.school_period;
       public         heap    postgres    false            �            1259    16460    subject    TABLE     �   CREATE TABLE public.subject (
    id integer NOT NULL,
    code character varying(20),
    name character varying(100),
    theoretical_hours integer,
    laboratory_hours integer,
    career integer,
    status boolean
);
    DROP TABLE public.subject;
       public         heap    postgres    false            �            1259    16463    teacher    TABLE     '  CREATE TABLE public.teacher (
    id integer NOT NULL,
    dni character varying(10),
    name character varying(100),
    color character varying(100),
    phone character varying(10),
    email character varying(100),
    archived boolean DEFAULT false,
    lastname character varying(100)
);
    DROP TABLE public.teacher;
       public         heap    postgres    false            �            1259    16467    teacher_distributive    TABLE     �   CREATE TABLE public.teacher_distributive (
    id integer NOT NULL,
    school_time integer,
    teacher integer,
    course integer,
    grade integer,
    career integer
);
 (   DROP TABLE public.teacher_distributive;
       public         heap    postgres    false            �            1259    16470    distributive    VIEW     �  CREATE VIEW public.distributive AS
 SELECT dis.id,
    teacher.id AS teacherid,
    teacher.dni AS teacher_cedula,
    teacher.name AS teacher_nombre,
    teacher.lastname AS teacher_apellido,
    grade.id AS gradeid,
    grade.name AS grade_name,
    subject.id AS subjectid,
    subject.name AS subject_name,
    subject.code AS subject_code,
    periood.id AS perioodid,
    periood.name AS period_name
   FROM ((((public.teacher_distributive dis
     JOIN public.school_period periood ON ((periood.id = dis.school_time)))
     JOIN public.teacher ON ((teacher.id = dis.teacher)))
     JOIN public.subject ON ((subject.id = dis.course)))
     JOIN public.grade ON ((grade.id = dis.grade)));
    DROP VIEW public.distributive;
       public          postgres    false    248    251    250    249    249    249    248    247    247    251    250    251    251    251    250    250            �            1259    16475    distributivo_docente_id_seq    SEQUENCE     �   CREATE SEQUENCE public.distributivo_docente_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 2   DROP SEQUENCE public.distributivo_docente_id_seq;
       public          postgres    false            �            1259    16476    grade_id_seq    SEQUENCE     }   CREATE SEQUENCE public.grade_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 #   DROP SEQUENCE public.grade_id_seq;
       public          postgres    false            �            1259    16477    grade_id_seq1    SEQUENCE     �   CREATE SEQUENCE public.grade_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.grade_id_seq1;
       public          postgres    false    247            [           0    0    grade_id_seq1    SEQUENCE OWNED BY     >   ALTER SEQUENCE public.grade_id_seq1 OWNED BY public.grade.id;
          public          postgres    false    255                        1259    16478    hours_table    TABLE     x   CREATE TABLE public.hours_table (
    id integer NOT NULL,
    hour character varying(15),
    time_position integer
);
    DROP TABLE public.hours_table;
       public         heap    postgres    false                       1259    16481    hours_table_id_seq    SEQUENCE     �   CREATE SEQUENCE public.hours_table_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.hours_table_id_seq;
       public          postgres    false    256            \           0    0    hours_table_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.hours_table_id_seq OWNED BY public.hours_table.id;
          public          postgres    false    257                       1259    16482 	   locations    TABLE     �   CREATE TABLE public.locations (
    id integer NOT NULL,
    name character varying(300),
    description text,
    status boolean DEFAULT true,
    latitude bigint,
    longitude bigint
);
    DROP TABLE public.locations;
       public         heap    postgres    false                       1259    16488    locations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.locations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 '   DROP SEQUENCE public.locations_id_seq;
       public          postgres    false                       1259    16489    locations_id_seq1    SEQUENCE     �   CREATE SEQUENCE public.locations_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.locations_id_seq1;
       public          postgres    false    258            ]           0    0    locations_id_seq1    SEQUENCE OWNED BY     F   ALTER SEQUENCE public.locations_id_seq1 OWNED BY public.locations.id;
          public          postgres    false    260                       1259    16490    means_classrom    TABLE     �   CREATE TABLE public.means_classrom (
    id integer NOT NULL,
    classroom integer,
    proyect character varying(200),
    chairs integer,
    tables integer,
    status boolean DEFAULT true
);
 "   DROP TABLE public.means_classrom;
       public         heap    postgres    false                       1259    16494    means_classrom_id_seq    SEQUENCE     �   CREATE SEQUENCE public.means_classrom_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 ,   DROP SEQUENCE public.means_classrom_id_seq;
       public          postgres    false                       1259    16495    means_classrom_id_seq1    SEQUENCE     �   CREATE SEQUENCE public.means_classrom_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.means_classrom_id_seq1;
       public          postgres    false    261            ^           0    0    means_classrom_id_seq1    SEQUENCE OWNED BY     P   ALTER SEQUENCE public.means_classrom_id_seq1 OWNED BY public.means_classrom.id;
          public          postgres    false    263                       1259    16496    periodo_lectivo_id_seq    SEQUENCE     �   CREATE SEQUENCE public.periodo_lectivo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 -   DROP SEQUENCE public.periodo_lectivo_id_seq;
       public          postgres    false            	           1259    16497    request    TABLE     �   CREATE TABLE public.request (
    id integer NOT NULL,
    school_time integer,
    date date,
    career integer,
    status boolean,
    requested_time integer
);
    DROP TABLE public.request;
       public         heap    postgres    false            
           1259    16500    request_id_seq    SEQUENCE     �   CREATE SEQUENCE public.request_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.request_id_seq;
       public          postgres    false    265            _           0    0    request_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.request_id_seq OWNED BY public.request.id;
          public          postgres    false    266                       1259    16501    school_period_id_seq    SEQUENCE     �   CREATE SEQUENCE public.school_period_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.school_period_id_seq;
       public          postgres    false    248            `           0    0    school_period_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.school_period_id_seq OWNED BY public.school_period.id;
          public          postgres    false    267                       1259    16502    size_request    TABLE     �   CREATE TABLE public.size_request (
    id integer NOT NULL,
    request integer,
    teaching_subject integer,
    start_date date,
    end_date date,
    status boolean
);
     DROP TABLE public.size_request;
       public         heap    postgres    false                       1259    16505    size_request_id_seq    SEQUENCE     �   CREATE SEQUENCE public.size_request_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.size_request_id_seq;
       public          postgres    false    268            a           0    0    size_request_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.size_request_id_seq OWNED BY public.size_request.id;
          public          postgres    false    269                       1259    16506    solicitud_detalle_id_seq    SEQUENCE     �   CREATE SEQUENCE public.solicitud_detalle_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 /   DROP SEQUENCE public.solicitud_detalle_id_seq;
       public          postgres    false                       1259    16507    solicitud_id_seq    SEQUENCE     �   CREATE SEQUENCE public.solicitud_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 '   DROP SEQUENCE public.solicitud_id_seq;
       public          postgres    false                       1259    16508    subject_id_seq    SEQUENCE     �   CREATE SEQUENCE public.subject_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.subject_id_seq;
       public          postgres    false    249            b           0    0    subject_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.subject_id_seq OWNED BY public.subject.id;
          public          postgres    false    272                       1259    16509    tabla_horas_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tabla_horas_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 )   DROP SEQUENCE public.tabla_horas_id_seq;
       public          postgres    false                       1259    16510    teacher_distributive_id_seq    SEQUENCE     �   CREATE SEQUENCE public.teacher_distributive_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.teacher_distributive_id_seq;
       public          postgres    false    251            c           0    0    teacher_distributive_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.teacher_distributive_id_seq OWNED BY public.teacher_distributive.id;
          public          postgres    false    274                       1259    17217    teacher_hour    TABLE     �   CREATE TABLE public.teacher_hour (
    id bigint NOT NULL,
    teacher integer NOT NULL,
    hour integer NOT NULL,
    day integer NOT NULL
);
     DROP TABLE public.teacher_hour;
       public         heap    postgres    false                       1259    17216    teacher_hour_id_seq    SEQUENCE     |   CREATE SEQUENCE public.teacher_hour_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.teacher_hour_id_seq;
       public          postgres    false    281            d           0    0    teacher_hour_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.teacher_hour_id_seq OWNED BY public.teacher_hour.id;
          public          postgres    false    280                       1259    16511    teacher_id_seq    SEQUENCE        CREATE SEQUENCE public.teacher_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 %   DROP SEQUENCE public.teacher_id_seq;
       public          postgres    false                       1259    16512    teacher_id_seq1    SEQUENCE     �   CREATE SEQUENCE public.teacher_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.teacher_id_seq1;
       public          postgres    false    250            e           0    0    teacher_id_seq1    SEQUENCE OWNED BY     B   ALTER SEQUENCE public.teacher_id_seq1 OWNED BY public.teacher.id;
          public          postgres    false    276                       1259    16513    time_configuration    TABLE     �   CREATE TABLE public.time_configuration (
    id integer NOT NULL,
    school_period integer,
    classroom integer,
    day integer,
    date date,
    hour integer,
    occupied_by integer,
    status boolean,
    color character varying(20)
);
 &   DROP TABLE public.time_configuration;
       public         heap    postgres    false                       1259    16516    time_configuration_id_seq    SEQUENCE     �   CREATE SEQUENCE public.time_configuration_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.time_configuration_id_seq;
       public          postgres    false    277            f           0    0    time_configuration_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.time_configuration_id_seq OWNED BY public.time_configuration.id;
          public          postgres    false    278                       1259    16517    v_distributive    VIEW       CREATE VIEW public.v_distributive AS
 SELECT dis.id,
    teacher.dni AS teacher_cedula,
    teacher.name AS teacher,
    teacher.lastname AS teacher_apellido,
    grade.name AS grade,
    subject.name AS subject,
    periood.name AS period
   FROM ((((public.teacher_distributive dis
     JOIN public.school_period periood ON ((periood.id = dis.school_time)))
     JOIN public.teacher ON ((teacher.id = dis.teacher)))
     JOIN public.subject ON ((subject.id = dis.course)))
     JOIN public.grade ON ((grade.id = dis.grade)));
 !   DROP VIEW public.v_distributive;
       public          postgres    false    248    251    249    250    250    250    250    251    251    251    247    251    248    249    247                       2604    16522    authorities authority_id    DEFAULT     �   ALTER TABLE ONLY auth.authorities ALTER COLUMN authority_id SET DEFAULT nextval('auth.authorities_authority_id_seq1'::regclass);
 E   ALTER TABLE auth.authorities ALTER COLUMN authority_id DROP DEFAULT;
       auth          postgres    false    217    215                       2604    16523    roles role_id    DEFAULT     k   ALTER TABLE ONLY auth.roles ALTER COLUMN role_id SET DEFAULT nextval('auth.roles_role_id_seq1'::regclass);
 :   ALTER TABLE auth.roles ALTER COLUMN role_id DROP DEFAULT;
       auth          postgres    false    223    218                       2604    16524 #   roles_authorities role_authority_id    DEFAULT     �   ALTER TABLE ONLY auth.roles_authorities ALTER COLUMN role_authority_id SET DEFAULT nextval('auth.roles_authorities_role_authority_id_seq1'::regclass);
 P   ALTER TABLE auth.roles_authorities ALTER COLUMN role_authority_id DROP DEFAULT;
       auth          postgres    false    221    219                       2604    16525    users user_id    DEFAULT     k   ALTER TABLE ONLY auth.users ALTER COLUMN user_id SET DEFAULT nextval('auth.users_user_id_seq1'::regclass);
 :   ALTER TABLE auth.users ALTER COLUMN user_id DROP DEFAULT;
       auth          postgres    false    229    224                       2604    16526    users_roles user_role_id    DEFAULT     �   ALTER TABLE ONLY auth.users_roles ALTER COLUMN user_role_id SET DEFAULT nextval('auth.users_roles_user_role_id_seq1'::regclass);
 E   ALTER TABLE auth.users_roles ALTER COLUMN user_role_id DROP DEFAULT;
       auth          postgres    false    227    225                       2604    16527 	   career id    DEFAULT     f   ALTER TABLE ONLY public.career ALTER COLUMN id SET DEFAULT nextval('public.career_id_seq'::regclass);
 8   ALTER TABLE public.career ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    233    232                       2604    16528    catalogue id    DEFAULT     l   ALTER TABLE ONLY public.catalogue ALTER COLUMN id SET DEFAULT nextval('public.catalogue_id_seq'::regclass);
 ;   ALTER TABLE public.catalogue ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    235    234                       2604    16529    classroom_types id    DEFAULT     y   ALTER TABLE ONLY public.classroom_types ALTER COLUMN id SET DEFAULT nextval('public.classroom_types_id_seq1'::regclass);
 A   ALTER TABLE public.classroom_types ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    238    236                        2604    16530    classrooms id    DEFAULT     o   ALTER TABLE ONLY public.classrooms ALTER COLUMN id SET DEFAULT nextval('public.classrooms_id_seq1'::regclass);
 <   ALTER TABLE public.classrooms ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    241    239            "           2604    16531    day id    DEFAULT     `   ALTER TABLE ONLY public.day ALTER COLUMN id SET DEFAULT nextval('public.day_id_seq'::regclass);
 5   ALTER TABLE public.day ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    245    244            #           2604    16532    grade id    DEFAULT     e   ALTER TABLE ONLY public.grade ALTER COLUMN id SET DEFAULT nextval('public.grade_id_seq1'::regclass);
 7   ALTER TABLE public.grade ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    255    247            *           2604    16533    hours_table id    DEFAULT     p   ALTER TABLE ONLY public.hours_table ALTER COLUMN id SET DEFAULT nextval('public.hours_table_id_seq'::regclass);
 =   ALTER TABLE public.hours_table ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    257    256            +           2604    16534    locations id    DEFAULT     m   ALTER TABLE ONLY public.locations ALTER COLUMN id SET DEFAULT nextval('public.locations_id_seq1'::regclass);
 ;   ALTER TABLE public.locations ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    260    258            -           2604    16535    means_classrom id    DEFAULT     w   ALTER TABLE ONLY public.means_classrom ALTER COLUMN id SET DEFAULT nextval('public.means_classrom_id_seq1'::regclass);
 @   ALTER TABLE public.means_classrom ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    263    261            /           2604    16536 
   request id    DEFAULT     h   ALTER TABLE ONLY public.request ALTER COLUMN id SET DEFAULT nextval('public.request_id_seq'::regclass);
 9   ALTER TABLE public.request ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    266    265            %           2604    16537    school_period id    DEFAULT     t   ALTER TABLE ONLY public.school_period ALTER COLUMN id SET DEFAULT nextval('public.school_period_id_seq'::regclass);
 ?   ALTER TABLE public.school_period ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    267    248            0           2604    16538    size_request id    DEFAULT     r   ALTER TABLE ONLY public.size_request ALTER COLUMN id SET DEFAULT nextval('public.size_request_id_seq'::regclass);
 >   ALTER TABLE public.size_request ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    269    268            &           2604    16539 
   subject id    DEFAULT     h   ALTER TABLE ONLY public.subject ALTER COLUMN id SET DEFAULT nextval('public.subject_id_seq'::regclass);
 9   ALTER TABLE public.subject ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    272    249            '           2604    16540 
   teacher id    DEFAULT     i   ALTER TABLE ONLY public.teacher ALTER COLUMN id SET DEFAULT nextval('public.teacher_id_seq1'::regclass);
 9   ALTER TABLE public.teacher ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    276    250            )           2604    16541    teacher_distributive id    DEFAULT     �   ALTER TABLE ONLY public.teacher_distributive ALTER COLUMN id SET DEFAULT nextval('public.teacher_distributive_id_seq'::regclass);
 F   ALTER TABLE public.teacher_distributive ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    274    251            2           2604    17220    teacher_hour id    DEFAULT     r   ALTER TABLE ONLY public.teacher_hour ALTER COLUMN id SET DEFAULT nextval('public.teacher_hour_id_seq'::regclass);
 >   ALTER TABLE public.teacher_hour ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    280    281    281            1           2604    16542    time_configuration id    DEFAULT     ~   ALTER TABLE ONLY public.time_configuration ALTER COLUMN id SET DEFAULT nextval('public.time_configuration_id_seq'::regclass);
 D   ALTER TABLE public.time_configuration ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    278    277            
          0    16389    authorities 
   TABLE DATA           7   COPY auth.authorities (authority_id, name) FROM stdin;
    auth          postgres    false    215   �
                0    16396    roles 
   TABLE DATA           ,   COPY auth.roles (role_id, name) FROM stdin;
    auth          postgres    false    218   '                0    16401    roles_authorities 
   TABLE DATA           S   COPY auth.roles_authorities (role_authority_id, role_id, authority_id) FROM stdin;
    auth          postgres    false    219   f                0    16408    users 
   TABLE DATA           Z   COPY auth.users (user_id, password, name, username, looked, expired, enabled) FROM stdin;
    auth          postgres    false    224                   0    16413    users_roles 
   TABLE DATA           C   COPY auth.users_roles (user_role_id, user_id, role_id) FROM stdin;
    auth          postgres    false    225                   0    16422    career 
   TABLE DATA           G   COPY public.career (id, name, duration, img, status, code) FROM stdin;
    public          postgres    false    232   F                0    16428 	   catalogue 
   TABLE DATA           <   COPY public.catalogue (id, name, value, status) FROM stdin;
    public          postgres    false    234   �                0    16432    classroom_types 
   TABLE DATA           A   COPY public.classroom_types (id, code, name, status) FROM stdin;
    public          postgres    false    236   �      "          0    16438 
   classrooms 
   TABLE DATA           c   COPY public.classrooms (id, type, location, name, capacity, status, description, code) FROM stdin;
    public          postgres    false    239   �      '          0    16448    day 
   TABLE DATA           1   COPY public.day (id, name, posicion) FROM stdin;
    public          postgres    false    244         *          0    16453    grade 
   TABLE DATA           W   COPY public.grade (id, name, working_day, level, parallel, status, career) FROM stdin;
    public          postgres    false    247   l      2          0    16478    hours_table 
   TABLE DATA           >   COPY public.hours_table (id, hour, time_position) FROM stdin;
    public          postgres    false    256   E      4          0    16482 	   locations 
   TABLE DATA           W   COPY public.locations (id, name, description, status, latitude, longitude) FROM stdin;
    public          postgres    false    258   �      7          0    16490    means_classrom 
   TABLE DATA           X   COPY public.means_classrom (id, classroom, proyect, chairs, tables, status) FROM stdin;
    public          postgres    false    261   Y      ;          0    16497    request 
   TABLE DATA           X   COPY public.request (id, school_time, date, career, status, requested_time) FROM stdin;
    public          postgres    false    265   v      +          0    16457    school_period 
   TABLE DATA           O   COPY public.school_period (id, name, start_date, end_date, status) FROM stdin;
    public          postgres    false    248   �      >          0    16502    size_request 
   TABLE DATA           c   COPY public.size_request (id, request, teaching_subject, start_date, end_date, status) FROM stdin;
    public          postgres    false    268   &      ,          0    16460    subject 
   TABLE DATA           f   COPY public.subject (id, code, name, theoretical_hours, laboratory_hours, career, status) FROM stdin;
    public          postgres    false    249   C      -          0    16463    teacher 
   TABLE DATA           Y   COPY public.teacher (id, dni, name, color, phone, email, archived, lastname) FROM stdin;
    public          postgres    false    250   �      .          0    16467    teacher_distributive 
   TABLE DATA           _   COPY public.teacher_distributive (id, school_time, teacher, course, grade, career) FROM stdin;
    public          postgres    false    251   b      J          0    17217    teacher_hour 
   TABLE DATA           >   COPY public.teacher_hour (id, teacher, hour, day) FROM stdin;
    public          postgres    false    281   �      G          0    16513    time_configuration 
   TABLE DATA           w   COPY public.time_configuration (id, school_period, classroom, day, date, hour, occupied_by, status, color) FROM stdin;
    public          postgres    false    277   E      g           0    0    authorities_authority_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('auth.authorities_authority_id_seq', 1, false);
          auth          postgres    false    216            h           0    0    authorities_authority_id_seq1    SEQUENCE SET     J   SELECT pg_catalog.setval('auth.authorities_authority_id_seq1', 96, true);
          auth          postgres    false    217            i           0    0 '   roles_authorities_role_authority_id_seq    SEQUENCE SET     T   SELECT pg_catalog.setval('auth.roles_authorities_role_authority_id_seq', 1, false);
          auth          postgres    false    220            j           0    0 (   roles_authorities_role_authority_id_seq1    SEQUENCE SET     V   SELECT pg_catalog.setval('auth.roles_authorities_role_authority_id_seq1', 184, true);
          auth          postgres    false    221            k           0    0    roles_role_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('auth.roles_role_id_seq', 1, false);
          auth          postgres    false    222            l           0    0    roles_role_id_seq1    SEQUENCE SET     >   SELECT pg_catalog.setval('auth.roles_role_id_seq1', 3, true);
          auth          postgres    false    223            m           0    0    users_roles_user_role_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('auth.users_roles_user_role_id_seq', 1, false);
          auth          postgres    false    226            n           0    0    users_roles_user_role_id_seq1    SEQUENCE SET     J   SELECT pg_catalog.setval('auth.users_roles_user_role_id_seq1', 19, true);
          auth          postgres    false    227            o           0    0    users_user_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('auth.users_user_id_seq', 1, false);
          auth          postgres    false    228            p           0    0    users_user_id_seq1    SEQUENCE SET     ?   SELECT pg_catalog.setval('auth.users_user_id_seq1', 12, true);
          auth          postgres    false    229            q           0    0    Asignatura_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Asignatura_id_seq"', 1, false);
          public          postgres    false    230            r           0    0    caerer_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.caerer_id_seq', 1, false);
          public          postgres    false    231            s           0    0    career_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.career_id_seq', 21, true);
          public          postgres    false    233            t           0    0    catalogue_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.catalogue_id_seq', 12, true);
          public          postgres    false    235            u           0    0    classroom_types_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.classroom_types_id_seq', 1, false);
          public          postgres    false    237            v           0    0    classroom_types_id_seq1    SEQUENCE SET     E   SELECT pg_catalog.setval('public.classroom_types_id_seq1', 1, true);
          public          postgres    false    238            w           0    0    classrooms_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.classrooms_id_seq', 1, false);
          public          postgres    false    240            x           0    0    classrooms_id_seq1    SEQUENCE SET     A   SELECT pg_catalog.setval('public.classrooms_id_seq1', 55, true);
          public          postgres    false    241            y           0    0    color_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.color_id_seq', 1, false);
          public          postgres    false    242            z           0    0    configuracion_horario_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.configuracion_horario_id_seq', 1, false);
          public          postgres    false    243            {           0    0 
   day_id_seq    SEQUENCE SET     8   SELECT pg_catalog.setval('public.day_id_seq', 7, true);
          public          postgres    false    245            |           0    0 
   dia_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.dia_id_seq', 1, false);
          public          postgres    false    246            }           0    0    distributivo_docente_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.distributivo_docente_id_seq', 1, false);
          public          postgres    false    253            ~           0    0    grade_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.grade_id_seq', 1, false);
          public          postgres    false    254                       0    0    grade_id_seq1    SEQUENCE SET     <   SELECT pg_catalog.setval('public.grade_id_seq1', 15, true);
          public          postgres    false    255            �           0    0    hours_table_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.hours_table_id_seq', 14, true);
          public          postgres    false    257            �           0    0    locations_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.locations_id_seq', 1, false);
          public          postgres    false    259            �           0    0    locations_id_seq1    SEQUENCE SET     @   SELECT pg_catalog.setval('public.locations_id_seq1', 29, true);
          public          postgres    false    260            �           0    0    means_classrom_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.means_classrom_id_seq', 1, false);
          public          postgres    false    262            �           0    0    means_classrom_id_seq1    SEQUENCE SET     E   SELECT pg_catalog.setval('public.means_classrom_id_seq1', 1, false);
          public          postgres    false    263            �           0    0    periodo_lectivo_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.periodo_lectivo_id_seq', 1, false);
          public          postgres    false    264            �           0    0    request_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.request_id_seq', 1, false);
          public          postgres    false    266            �           0    0    school_period_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.school_period_id_seq', 4, true);
          public          postgres    false    267            �           0    0    size_request_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.size_request_id_seq', 1, false);
          public          postgres    false    269            �           0    0    solicitud_detalle_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.solicitud_detalle_id_seq', 1, false);
          public          postgres    false    270            �           0    0    solicitud_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.solicitud_id_seq', 1, false);
          public          postgres    false    271            �           0    0    subject_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.subject_id_seq', 15, true);
          public          postgres    false    272            �           0    0    tabla_horas_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.tabla_horas_id_seq', 1, false);
          public          postgres    false    273            �           0    0    teacher_distributive_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.teacher_distributive_id_seq', 29, true);
          public          postgres    false    274            �           0    0    teacher_hour_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.teacher_hour_id_seq', 23, true);
          public          postgres    false    280            �           0    0    teacher_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.teacher_id_seq', 1, false);
          public          postgres    false    275            �           0    0    teacher_id_seq1    SEQUENCE SET     >   SELECT pg_catalog.setval('public.teacher_id_seq1', 11, true);
          public          postgres    false    276            �           0    0    time_configuration_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.time_configuration_id_seq', 526967, true);
          public          postgres    false    278            4           2606    16544    authorities authorities_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY auth.authorities
    ADD CONSTRAINT authorities_pkey PRIMARY KEY (authority_id);
 D   ALTER TABLE ONLY auth.authorities DROP CONSTRAINT authorities_pkey;
       auth            postgres    false    215            8           2606    16546 (   roles_authorities roles_authorities_pkey 
   CONSTRAINT     s   ALTER TABLE ONLY auth.roles_authorities
    ADD CONSTRAINT roles_authorities_pkey PRIMARY KEY (role_authority_id);
 P   ALTER TABLE ONLY auth.roles_authorities DROP CONSTRAINT roles_authorities_pkey;
       auth            postgres    false    219            6           2606    16548    roles roles_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY auth.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (role_id);
 8   ALTER TABLE ONLY auth.roles DROP CONSTRAINT roles_pkey;
       auth            postgres    false    218            :           2606    16550    users users_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY auth.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 8   ALTER TABLE ONLY auth.users DROP CONSTRAINT users_pkey;
       auth            postgres    false    224            <           2606    16552    users_roles users_roles_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY auth.users_roles
    ADD CONSTRAINT users_roles_pkey PRIMARY KEY (user_role_id);
 D   ALTER TABLE ONLY auth.users_roles DROP CONSTRAINT users_roles_pkey;
       auth            postgres    false    225            L           2606    16554    subject Asignatura_pk 
   CONSTRAINT     U   ALTER TABLE ONLY public.subject
    ADD CONSTRAINT "Asignatura_pk" PRIMARY KEY (id);
 A   ALTER TABLE ONLY public.subject DROP CONSTRAINT "Asignatura_pk";
       public            postgres    false    249            >           2606    16556    career caerer_pk 
   CONSTRAINT     N   ALTER TABLE ONLY public.career
    ADD CONSTRAINT caerer_pk PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.career DROP CONSTRAINT caerer_pk;
       public            postgres    false    232            @           2606    16558    catalogue catalogue_pk 
   CONSTRAINT     T   ALTER TABLE ONLY public.catalogue
    ADD CONSTRAINT catalogue_pk PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.catalogue DROP CONSTRAINT catalogue_pk;
       public            postgres    false    234            B           2606    16560 $   classroom_types classroom_types_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.classroom_types
    ADD CONSTRAINT classroom_types_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.classroom_types DROP CONSTRAINT classroom_types_pkey;
       public            postgres    false    236            D           2606    16562    classrooms classrooms_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.classrooms
    ADD CONSTRAINT classrooms_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.classrooms DROP CONSTRAINT classrooms_pkey;
       public            postgres    false    239            \           2606    16564 +   time_configuration configuracion_horario_pk 
   CONSTRAINT     i   ALTER TABLE ONLY public.time_configuration
    ADD CONSTRAINT configuracion_horario_pk PRIMARY KEY (id);
 U   ALTER TABLE ONLY public.time_configuration DROP CONSTRAINT configuracion_horario_pk;
       public            postgres    false    277            F           2606    16566 
   day dia_pk 
   CONSTRAINT     H   ALTER TABLE ONLY public.day
    ADD CONSTRAINT dia_pk PRIMARY KEY (id);
 4   ALTER TABLE ONLY public.day DROP CONSTRAINT dia_pk;
       public            postgres    false    244            P           2606    16568 ,   teacher_distributive distributivo_docente_pk 
   CONSTRAINT     j   ALTER TABLE ONLY public.teacher_distributive
    ADD CONSTRAINT distributivo_docente_pk PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.teacher_distributive DROP CONSTRAINT distributivo_docente_pk;
       public            postgres    false    251            H           2606    16570    grade grade_pk 
   CONSTRAINT     L   ALTER TABLE ONLY public.grade
    ADD CONSTRAINT grade_pk PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.grade DROP CONSTRAINT grade_pk;
       public            postgres    false    247            T           2606    16572    locations locations_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.locations
    ADD CONSTRAINT locations_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.locations DROP CONSTRAINT locations_pkey;
       public            postgres    false    258            V           2606    16574 "   means_classrom means_classrom_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.means_classrom
    ADD CONSTRAINT means_classrom_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.means_classrom DROP CONSTRAINT means_classrom_pkey;
       public            postgres    false    261            J           2606    16576     school_period periodo_lectivo_pk 
   CONSTRAINT     ^   ALTER TABLE ONLY public.school_period
    ADD CONSTRAINT periodo_lectivo_pk PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.school_period DROP CONSTRAINT periodo_lectivo_pk;
       public            postgres    false    248            Z           2606    16578 !   size_request solicitud_detalle_pk 
   CONSTRAINT     _   ALTER TABLE ONLY public.size_request
    ADD CONSTRAINT solicitud_detalle_pk PRIMARY KEY (id);
 K   ALTER TABLE ONLY public.size_request DROP CONSTRAINT solicitud_detalle_pk;
       public            postgres    false    268            X           2606    16580    request solicitud_pk 
   CONSTRAINT     R   ALTER TABLE ONLY public.request
    ADD CONSTRAINT solicitud_pk PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.request DROP CONSTRAINT solicitud_pk;
       public            postgres    false    265            R           2606    16582    hours_table tabla_horas_pk 
   CONSTRAINT     X   ALTER TABLE ONLY public.hours_table
    ADD CONSTRAINT tabla_horas_pk PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.hours_table DROP CONSTRAINT tabla_horas_pk;
       public            postgres    false    256            ^           2606    17222    teacher_hour teacher_hour_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.teacher_hour
    ADD CONSTRAINT teacher_hour_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.teacher_hour DROP CONSTRAINT teacher_hour_pkey;
       public            postgres    false    281            N           2606    16584    teacher teacher_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.teacher DROP CONSTRAINT teacher_pkey;
       public            postgres    false    250            _           2606    16585    roles_authorities fk_auth    FK CONSTRAINT     �   ALTER TABLE ONLY auth.roles_authorities
    ADD CONSTRAINT fk_auth FOREIGN KEY (authority_id) REFERENCES auth.authorities(authority_id);
 A   ALTER TABLE ONLY auth.roles_authorities DROP CONSTRAINT fk_auth;
       auth          postgres    false    219    3380    215            `           2606    16590    roles_authorities fk_role    FK CONSTRAINT     y   ALTER TABLE ONLY auth.roles_authorities
    ADD CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES auth.roles(role_id);
 A   ALTER TABLE ONLY auth.roles_authorities DROP CONSTRAINT fk_role;
       auth          postgres    false    219    3382    218            a           2606    16595    users_roles fk_role_users    FK CONSTRAINT     y   ALTER TABLE ONLY auth.users_roles
    ADD CONSTRAINT fk_role_users FOREIGN KEY (role_id) REFERENCES auth.roles(role_id);
 A   ALTER TABLE ONLY auth.users_roles DROP CONSTRAINT fk_role_users;
       auth          postgres    false    225    218    3382            b           2606    16600    users_roles fk_user    FK CONSTRAINT     s   ALTER TABLE ONLY auth.users_roles
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES auth.users(user_id);
 ;   ALTER TABLE ONLY auth.users_roles DROP CONSTRAINT fk_user;
       auth          postgres    false    3386    224    225            i           2606    16605 "   teacher_distributive asignatura_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.teacher_distributive
    ADD CONSTRAINT asignatura_fk FOREIGN KEY (course) REFERENCES public.subject(id);
 L   ALTER TABLE ONLY public.teacher_distributive DROP CONSTRAINT asignatura_fk;
       public          postgres    false    3404    249    251            j           2606    16610    teacher_distributive career_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.teacher_distributive
    ADD CONSTRAINT career_fk FOREIGN KEY (career) REFERENCES public.career(id) NOT VALID;
 H   ALTER TABLE ONLY public.teacher_distributive DROP CONSTRAINT career_fk;
       public          postgres    false    251    3390    232            e           2606    16615    grade career_grade_fk    FK CONSTRAINT     t   ALTER TABLE ONLY public.grade
    ADD CONSTRAINT career_grade_fk FOREIGN KEY (career) REFERENCES public.career(id);
 ?   ALTER TABLE ONLY public.grade DROP CONSTRAINT career_grade_fk;
       public          postgres    false    247    3390    232            r           2606    16620    time_configuration classroom_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.time_configuration
    ADD CONSTRAINT classroom_fk FOREIGN KEY (classroom) REFERENCES public.classrooms(id);
 I   ALTER TABLE ONLY public.time_configuration DROP CONSTRAINT classroom_fk;
       public          postgres    false    239    277    3396            s           2606    16625    time_configuration dia_fk    FK CONSTRAINT     r   ALTER TABLE ONLY public.time_configuration
    ADD CONSTRAINT dia_fk FOREIGN KEY (day) REFERENCES public.day(id);
 C   ALTER TABLE ONLY public.time_configuration DROP CONSTRAINT dia_fk;
       public          postgres    false    277    3398    244            p           2606    16630 "   size_request fk-asignatura_docente    FK CONSTRAINT     �   ALTER TABLE ONLY public.size_request
    ADD CONSTRAINT "fk-asignatura_docente" FOREIGN KEY (teaching_subject) REFERENCES public.teacher_distributive(id);
 N   ALTER TABLE ONLY public.size_request DROP CONSTRAINT "fk-asignatura_docente";
       public          postgres    false    251    3408    268            c           2606    16635     classrooms fk_classroom_location    FK CONSTRAINT     �   ALTER TABLE ONLY public.classrooms
    ADD CONSTRAINT fk_classroom_location FOREIGN KEY (location) REFERENCES public.locations(id);
 J   ALTER TABLE ONLY public.classrooms DROP CONSTRAINT fk_classroom_location;
       public          postgres    false    258    239    3412            d           2606    16640    classrooms fk_classroom_type    FK CONSTRAINT     �   ALTER TABLE ONLY public.classrooms
    ADD CONSTRAINT fk_classroom_type FOREIGN KEY (type) REFERENCES public.classroom_types(id);
 F   ALTER TABLE ONLY public.classrooms DROP CONSTRAINT fk_classroom_type;
       public          postgres    false    3394    239    236            w           2606    17233    teacher_hour fk_day_teacher    FK CONSTRAINT     t   ALTER TABLE ONLY public.teacher_hour
    ADD CONSTRAINT fk_day_teacher FOREIGN KEY (day) REFERENCES public.day(id);
 E   ALTER TABLE ONLY public.teacher_hour DROP CONSTRAINT fk_day_teacher;
       public          postgres    false    3398    281    244            x           2606    17228    teacher_hour fk_hour_teacher    FK CONSTRAINT     ~   ALTER TABLE ONLY public.teacher_hour
    ADD CONSTRAINT fk_hour_teacher FOREIGN KEY (hour) REFERENCES public.hours_table(id);
 F   ALTER TABLE ONLY public.teacher_hour DROP CONSTRAINT fk_hour_teacher;
       public          postgres    false    256    281    3410            f           2606    16645    grade fk_level_catalogue    FK CONSTRAINT     y   ALTER TABLE ONLY public.grade
    ADD CONSTRAINT fk_level_catalogue FOREIGN KEY (level) REFERENCES public.catalogue(id);
 B   ALTER TABLE ONLY public.grade DROP CONSTRAINT fk_level_catalogue;
       public          postgres    false    234    3392    247            n           2606    16650     means_classrom fk_mean_classroom    FK CONSTRAINT     �   ALTER TABLE ONLY public.means_classrom
    ADD CONSTRAINT fk_mean_classroom FOREIGN KEY (classroom) REFERENCES public.classrooms(id);
 J   ALTER TABLE ONLY public.means_classrom DROP CONSTRAINT fk_mean_classroom;
       public          postgres    false    239    261    3396            y           2606    17223    teacher_hour fk_teacher_hour    FK CONSTRAINT     }   ALTER TABLE ONLY public.teacher_hour
    ADD CONSTRAINT fk_teacher_hour FOREIGN KEY (teacher) REFERENCES public.teacher(id);
 F   ALTER TABLE ONLY public.teacher_hour DROP CONSTRAINT fk_teacher_hour;
       public          postgres    false    281    250    3406            k           2606    16655    teacher_distributive grade_fk    FK CONSTRAINT     z   ALTER TABLE ONLY public.teacher_distributive
    ADD CONSTRAINT grade_fk FOREIGN KEY (grade) REFERENCES public.grade(id);
 G   ALTER TABLE ONLY public.teacher_distributive DROP CONSTRAINT grade_fk;
       public          postgres    false    251    3400    247            t           2606    16660    time_configuration hora_fk    FK CONSTRAINT     |   ALTER TABLE ONLY public.time_configuration
    ADD CONSTRAINT hora_fk FOREIGN KEY (hour) REFERENCES public.hours_table(id);
 D   ALTER TABLE ONLY public.time_configuration DROP CONSTRAINT hora_fk;
       public          postgres    false    277    3410    256            g           2606    16665    grade paralell_catalogue_fk    FK CONSTRAINT        ALTER TABLE ONLY public.grade
    ADD CONSTRAINT paralell_catalogue_fk FOREIGN KEY (parallel) REFERENCES public.catalogue(id);
 E   ALTER TABLE ONLY public.grade DROP CONSTRAINT paralell_catalogue_fk;
       public          postgres    false    3392    234    247            u           2606    16670 %   time_configuration periodo_lectivo_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.time_configuration
    ADD CONSTRAINT periodo_lectivo_fk FOREIGN KEY (school_period) REFERENCES public.school_period(id);
 O   ALTER TABLE ONLY public.time_configuration DROP CONSTRAINT periodo_lectivo_fk;
       public          postgres    false    3402    277    248            l           2606    16675 '   teacher_distributive periodo_lectivo_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.teacher_distributive
    ADD CONSTRAINT periodo_lectivo_fk FOREIGN KEY (school_time) REFERENCES public.school_period(id);
 Q   ALTER TABLE ONLY public.teacher_distributive DROP CONSTRAINT periodo_lectivo_fk;
       public          postgres    false    3402    248    251            o           2606    16680    request periodo_lectivo_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.request
    ADD CONSTRAINT periodo_lectivo_fk FOREIGN KEY (school_time) REFERENCES public.school_period(id);
 D   ALTER TABLE ONLY public.request DROP CONSTRAINT periodo_lectivo_fk;
       public          postgres    false    265    3402    248            q           2606    16685    size_request solicitud_fk    FK CONSTRAINT     z   ALTER TABLE ONLY public.size_request
    ADD CONSTRAINT solicitud_fk FOREIGN KEY (request) REFERENCES public.request(id);
 C   ALTER TABLE ONLY public.size_request DROP CONSTRAINT solicitud_fk;
       public          postgres    false    268    3416    265            v           2606    16690 :   time_configuration teacher_distributive-config_schedule-fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.time_configuration
    ADD CONSTRAINT "teacher_distributive-config_schedule-fk" FOREIGN KEY (occupied_by) REFERENCES public.teacher_distributive(id);
 f   ALTER TABLE ONLY public.time_configuration DROP CONSTRAINT "teacher_distributive-config_schedule-fk";
       public          postgres    false    251    3408    277            m           2606    16695    teacher_distributive teacher_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.teacher_distributive
    ADD CONSTRAINT teacher_fk FOREIGN KEY (teacher) REFERENCES public.teacher(id);
 I   ALTER TABLE ONLY public.teacher_distributive DROP CONSTRAINT teacher_fk;
       public          postgres    false    3406    251    250            h           2606    16700    grade working_day_catalogue_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.grade
    ADD CONSTRAINT working_day_catalogue_fk FOREIGN KEY (working_day) REFERENCES public.catalogue(id);
 H   ALTER TABLE ONLY public.grade DROP CONSTRAINT working_day_catalogue_fk;
       public          postgres    false    3392    234    247            
   0  x�u�ݎ�0F��]R�s�%n��+U[����E���N�˜���cX�L�K!~ɻ�r�G�S+�tü�1�[�H�~��\�jR�%��{�n��d�� N�O�a��C��gk��Hq%&���u�$��RP�u4���t�O�\��?�[f���gL�[��A�������#h��!D�s�сBK.IT�p�\�4����]��ǔ�*�2�V}�b�+��M����?�����"B�u���>p��4c����L��}�twcw�2,$�I� E3w]Fxp)3��ʀ:茳�ɰr�9��f�n�e�ϟ�$�)�;�7;�NR���ɘ|7���C(y2�z"�`<�F�[���E��ps*��Rw׬���_~�����Z`M�k��k���1���G��xY���`K�{�%$2�+#42�J-�˴r3�k��ތ��EU҄gCh%cIT��{vu�e�yX��<��K	+sR9XU0`�~s�Cf�ߢ��w��_��cJ߽�����q�� �x9����Gb���A�_��~�m��Mr         /   x�3���q�wt����2�r�]�����!<7G�� G�H� DnL         �  x�-�ɭ,9Ϗ�Dm����oǐ����+�%B��15N,�[�����|e�3�4p����_���A�@8� �	��Ńi/�a,L�ؘ��a�7�ySk͢&�ysa�77�y�`�7/�y�����2o>,���2o˼��g�˼���[ۼu��[�m�j���΁l�6���ۼ����ml���1o_�vᘷǼ�p�;ǼC���1�,�n(Wqp�;׼S���5�<\���5��Nͻ׼�pͻ׼{P�ۋ2�ʼ�(��C�We^e^��j�̫�2�ڼ���Rh����C��m^m^O�y-��덎/x�^������^�U��/ ����?-��i9������c���S�cnr�ON����Q������>A�:d(Ӈe
��L#���d:��i�t"O�P$*S�LeR��L+r��E�2��V&���"_�`�󼟱L2R�iF�2�HZ�Y�d#m�n�-��eʑ�L:R�ig;���eꑽL>җ�G�2I`� �$$����0�$f*��LF��J3!Id�$�̤$����2�dfj��LNҙ�I>3AIh����>����4��f���LVҚ�J^3aIl�,�ͤ%����6��f�j����f���L`-r
k��X���Z�D�"��'r2{"��'rB{~hM~"'�'rZ{���?0ع         �  x�]�˒�0�5>E/z-�AQ���f�r!>}�t�L�J�l��ש,�w��i��$�Lҧ��lmK7�EOmjC:h�e�֘��ȹ��w�����X��R���,�Ϫ ���f�dڮ©tUA�mQ��P!�b߈�):��c/�\��Q��M�	!ȓ�@�'��^V�Wչ�o�5-~n:�.�+�-w��`.�����GE��Z���O���O���U�g��$!�<2u���S���kr�g8���Dsp�_����Q�&vդ;��Nlcݶ�"��@�2�ՠ��z?��U����mH�.���VAR�z�t�!pѻo���Iٿ;�~�j���sc������Q�5"{,��|y`⌒oS^���Pm<@K�q�����9V�^�*��p
�����zB(��i��m�������~ے�/cZ�)���[���܂}i�+H��tT��=WA�l�?~AR���� �j�{>��>�/�w         3   x���  �7c�a��b�u��a��(��pP�CjSՕ���$���         �  x��WMo�0=������k�V=�Z�*�J��]c���&�~M��9dE�=T�0Hx3����6�6��ƹ�[ng��C#����]��R��\ס����K�M��Y��)+s6�:#�'�z�ǭ0x|z֫v\�����&�v��A�DH�Ĕ���Z�~�����9���i?Yʲ$�eC,v��$y�H��JK�
��D*�2�����=�ppD��{����椗��#����X��'�X�l�TC�Yk�	՞}kPFX>^-!��a-�w\9K�FXr��������<�B�+�F��
V����g`�ucן�=ep��>�J��"����;�|:����L�x,�Iq����M���n�悫z�a��$��yP�|�c�NփEe����̱�}͢��S�ʡ��bc$*	�V��8"Q���c\I@)<>�NCzQ�U��e���I���,���W����"�� ��,ˀ��h����R���7~����E@��J:�[>:��p�Z�7���r�Y�$�Qݰ;ij�U��'�>�}z��
+j��	~�z[��2`~��@�
QFET�E�k�m�*�y��fŝ�v{��n�l�}8�-̫�^}tq0щ����NAs�ʗG-���z$��i֚W� ��?�;�sv��Wf�>͂ �>q         z   x�U��
�0@���cJm��n��J��:���ҿo"��W�FZ&p�$�!�H*�+�JT%UQ5�(��w�K����x�2[O}��$;���e&qv����=ѭ�1���Ub�NJ�?JN@�            x�3䌌	�L,�I�,����� 1np      "   Q   x�35�4�42�L,�I28K�L����Ԣ|C��<�Ҥ�����<CN�`ǐ�H.SS�.3�R#��4]F(��`�b���� �S�      '   P   x�3�.�KI��4�2���3���9CJS�Alc.��Ԕ<τ˔3$���1�2�t+�1͸�9�KJ�@s�=... {��      *   �   x�]���0���S��1���M�����B��%��nd:MvX~_��-�*=Y=)m'`@�
+��jq��H�i[��.PQ�1����n�����-0$X@oȢ��,{wJ��-�x9U��)�O���H�9�z�8�W7�yT��{HD��w��f W�$C��@_im�o����M�á���I/�����>���׷S�      2   u   x�%���PCѵ���٩����l�sYI��͌���`E���+�݃VHݓV��7����<�B����Z�oX��}S����;��(�`�<RE�Q��AM�Q���C��5(5      4      x�}�1�0���9�R� �=A�P�	�����T*���`��	�mt�_O�q�E���C]}�"\r�вxa_�����s��C�y��36��g�ﰠACr�űj9�uR�9�m̚������'B�      7      x������ � �      ;      x������ � �      +   �   x�M�Q
�0D��S�]�(~֥�+Yj�<��g�j@!�2C0�M<#�^^esjiH:����n6R�Td�MC]���pb�1O_��G�"��>���+ݐ��+S���-�@����ι?d+�      >      x������ � �      ,   o  x�e��N�0���S�	Pv8/BbR9r1����&�$]���[	�8U��{�i��릇#f�0���)#t����s�*��pH-�#����R���]w|��آ5���9�+��R�^b8E�p���%�g'��G�|�;45�ͪ٪f+Δ0��\����R�Sծ�':qr�G?���-v�V�W����yF1�A���ۇ1`$�B�[n�*�p�<GJ:(Hj�e����V&5�){�z,jOfd�2�"�u���,���!�{;�Y�*嫝*�3��[� O?կ\���8{�y��<����2�9�MU��ג0WM�����l�P�f�L�I�{���x�H^L�%�Ut{\�,��ޮ������      -   �  x�m�Ok�@��՟B�����%!0Kaa!���4��ͶNvv>�V;���������*-Ƚ5�[8�ُ~�8��¶�ׯ0���7���.�攓�^��C���P �VR�	��HqY�Z_���nD?�.���[KB'᪓
n�YWKm��{��:�����+!W�����D��--6.ߝ�3��	���4���j�g�'�i�+���������1��,�,mYԩ+�9�V�E��؇|D�q�v?�u���S����p ��ޢ�^A�@qJ��V;�:¹�$́z�ك�Bf5(m�w�y(��`b"�ZU5��/�¾��CFe���&�)��&�=t5~��L�g`"�o?N[��ĭ�(�EHɾ8����oD�I��ѵݖ���;�K�h�5B����      .   }   x�]���0C��0U)�.�	��5p���ȏ8����;�<�!�R��:�y�:�L�$-<�Ml����NZ���l=��`��
�D�*X�W�v���^���~y�ɑ�y^���˩��9H���$�      J   F   x����0�o�W1�d��?G��	��B@����� {�w��b\gː/\4��W���J��C�j^�      G   �  x�u�ٍ�0D��^�/Ml)#�c�$��.��>�#ѡmL/^���V�G��+VZy���B��<�)c!�N�5Z�EW������*b�L�"�#�V���**���]9g�}A,9 NU"����U$��*�;�^bCD���\O2$�v����HG�'1B'REd�H������� �����]d<]uDE�sц"�H;�(#$��LQFVQD���22%�bF������c���n}#k���K@��u+��F@&�& ^�u�"��3i@E��]�8�]�8�!�H�sq�����]d��ß�8���K��3
Eetw)�pQF(����#��DGe�D4����iWs}���QD�"��tD,� ���$ۻ�4B����y����ͦD     